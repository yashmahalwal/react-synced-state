import {Dispatch, SetStateAction, useContext, useEffect, useMemo, useRef, useState} from "react";
import { SyncedStateContext } from "./SyncedStateProvider";
import {CheckFunction, Config, defaultLayerName, defaultPriority, QueueTicket} from "./types";

export default function useSyncedState<T>(arg: T | (() => T), config?: Config<T>): [T, Dispatch<SetStateAction<T>>]{
    const [state, setState] = useState(arg);
    const ticketNumber = useRef<QueueTicket | null>(null);
    const syncedContext = useContext(SyncedStateContext);
    const isStateFalsy = useMemo(() => config?.shouldDequeue?.(state), [])

    useEffect(() => {
        const layer = config?.layer ?? defaultLayerName;
        const priority = config?.priority ?? defaultPriority;
        const checkFunction = useMemo(() => config?.shouldDequeue ?? CheckFunction, [config?.shouldDequeue]);
        const dequeueCheck = checkFunction(state);
        const cleanup = () => {
            ticketNumber.current && syncedContext.removeFromQueue(ticketNumber.current, layer, priority);
            ticketNumber.current = null;
        }
        if(!dequeueCheck){
            ticketNumber.current = syncedContext.addToQueue(layer, priority);
        }

        return cleanup;

    }, [state, config?.layer, config?.priority, config?.shouldDequeue]);

    return [state, setState];
}