import { Dispatch, SetStateAction, useContext, useEffect, useMemo, useRef, useState } from "react";
import { SyncedStateContext } from "./SyncedStateProvider";
import { Config, defaultLayerName, defaultPriority, QueueTicket } from "./types";

function checkFalsiness<T>(state: T, config?: Config<T>) {
  return config?.shouldDequeue?.(state) ?? !state;
}

export function useSyncedValue<T>(state: T, config?: Config<T>): T {
  const ticketNumber = useRef<QueueTicket | null>(null);
  const { addToQueue, removeFromQueue, top } = useContext(SyncedStateContext);
  const isStateFalsy = useMemo(() => checkFalsiness(state, config), [config, state]);
  const oldStateValue = useRef(state);
  const isAtFrontOfQueue = useMemo(() => {
    return !!ticketNumber.current && top.get(config?.layer ?? defaultLayerName) === ticketNumber.current;
  }, [config?.layer, top]);

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
      ticketNumber.current = addToQueue(layer, priority);
    }

    return cleanup;
  }, [addToQueue, config?.layer, config?.priority, isStateFalsy, removeFromQueue]);

  return isStateFalsy || isAtFrontOfQueue ? state : oldStateValue.current;
}

export function useSyncedState<T>(arg: T | (() => T), config?: Config<T>): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState(arg);
  return [useSyncedValue(state, config), setState];
}
