import { Dispatch, SetStateAction, useContext, useEffect, useMemo, useRef, useState } from "react";
import { SyncedStateContext } from "./SyncedStateProvider";
import { Config, defaultLayerName, defaultPriority, QueueTicket } from "./types";

export function useSyncedValue<T>(state: T, config?: Config<T>): T {
  const ticketNumber = useRef<QueueTicket | null>(null);
  const syncedContext = useContext(SyncedStateContext);
  const isStateFalsy = useMemo(() => config?.shouldDequeue?.(state) ?? !!state, [config, state]);
  const oldStateValue = useRef(state);
  const isAtFrontOfQueue = useMemo(() => {
    return !!ticketNumber.current && syncedContext.top.get(config?.layer ?? defaultLayerName) === ticketNumber.current;
  }, [config?.layer, syncedContext.top]);

  useEffect(
    () => () => {
      oldStateValue.current = state;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isAtFrontOfQueue]
  );

  useEffect(() => {
    const layer = config?.layer ?? defaultLayerName;
    const priority = config?.priority ?? defaultPriority;
    const cleanup = () => {
      ticketNumber.current && syncedContext.removeFromQueue(ticketNumber.current, layer, priority);
      ticketNumber.current = null;
    };
    if (!isStateFalsy) {
      ticketNumber.current = syncedContext.addToQueue(layer, priority);
    }

    return cleanup;
  }, [state, config?.layer, config?.priority, isStateFalsy, syncedContext]);

  return isStateFalsy || isAtFrontOfQueue ? state : oldStateValue.current;
}

export function useSyncedState<T>(arg: T | (() => T), config?: Config<T>): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState(arg);
  return [useSyncedValue(state, config), setState];
}
