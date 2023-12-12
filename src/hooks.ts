import { Dispatch, SetStateAction, useContext, useEffect, useMemo, useRef, useState } from "react";
import { SyncedStateContext } from "./SyncedStateProvider";
import { Config, defaultLayerName, defaultPriority, QueueTicket } from "./types";

/**
 * Checks if the state is falsy based on the configuration.
 * @template T - The type of state variable.
 * @param {T} state - The state value.
 * @param {Config<T>} [config] - Configuration options for the state.
 * @returns {boolean} A boolean indicating whether the state is falsy.
 */
function checkFalsiness<T>(state: T, config?: Config<T>) {
  return config?.shouldDequeue?.(state) ?? !state;
}

/**
 * Hook to return the synchronized value based on the current input and global queue position
 * Contains the synchronization logic on component level
 * @public
 * @template T - The type of state.
 * @param {T} state - The state value.
 * @param {Config<T>} [config] - Configuration options for the hook.
 * @returns {T} The synchronized state value.
 */
export function useSyncedValue<T>(state: T, config?: Config<T>): T {
  // Keep track of state update from falsy to truthy
  const ticketNumber = useRef<QueueTicket | null>(null);
  const { addToQueue, removeFromQueue, top } = useContext(SyncedStateContext);
  const isStateFalsy = useMemo(() => checkFalsiness(state, config), [config, state]);
  // Cache this value. This is returned until the ticket is at front of the queue
  const oldStateValue = useRef(state);
  const isAtFrontOfQueue = useMemo(() => {
    return !!ticketNumber.current && top.get(config?.layer ?? defaultLayerName) === ticketNumber.current;
  }, [config?.layer, top]);

  // Whenever state is falsy, cached value and current value are in sync
  if (isStateFalsy) {
    oldStateValue.current = state;
  }

  useEffect(() => {
    const layer = config?.layer ?? defaultLayerName;
    const priority = config?.priority ?? defaultPriority;
    const cleanup = () => {
      ticketNumber.current && removeFromQueue(ticketNumber.current, layer, priority);
      ticketNumber.current = null;
    };
    if (!isStateFalsy) {
      // Add to queue and get ticket number
      ticketNumber.current = addToQueue(layer, priority);
    }

    // Remove from queue
    return cleanup;
  }, [addToQueue, config?.layer, config?.priority, isStateFalsy, removeFromQueue]);

  // Returns current value if state is falsy or if is at front of the queue
  return isStateFalsy || isAtFrontOfQueue ? state : oldStateValue.current;
}

/**
 * A hook to wrap the synchronisation logic around a state variable.
 * @template T - The type of state.
 * @param {T | (() => T)} arg - The initial state or a function to compute the initial state.
 * @param {Config<T>} [config] - Configuration options for the state.
 * @returns {[T, Dispatch<SetStateAction<T>>, T]} A tuple containing the synchronized state, state setter, and the original state.
 * @public
 */
export function useSyncedState<T>(arg: T | (() => T), config?: Config<T>): [T, Dispatch<SetStateAction<T>>, T] {
  const [state, setState] = useState(arg);
  return [useSyncedValue(state, config), setState, state];
}
