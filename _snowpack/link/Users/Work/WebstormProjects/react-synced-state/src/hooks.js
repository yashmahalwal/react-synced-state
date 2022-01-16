import {useContext, useEffect, useMemo, useRef, useState} from "../../../../../../pkg/react.js";
import {SyncedStateContext} from "./SyncedStateProvider.js";
import {defaultLayerName, defaultPriority} from "./types.js";
export function useSyncedValue(state, config) {
  const ticketNumber = useRef(null);
  const syncedContext = useContext(SyncedStateContext);
  const isStateFalsy = useMemo(() => config?.shouldDequeue?.(state) ?? !!state, [config, state]);
  const oldStateValue = useRef(state);
  const isAtFrontOfQueue = useMemo(() => {
    return !!ticketNumber.current && syncedContext.top.get(config?.layer ?? defaultLayerName) === ticketNumber.current;
  }, [config?.layer, syncedContext.top]);
  useEffect(() => () => {
    oldStateValue.current = state;
  }, [isAtFrontOfQueue]);
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
export function useSyncedState(arg, config) {
  const [state, setState] = useState(arg);
  return [useSyncedValue(state, config), setState];
}
