import React, { useCallback, useMemo, useRef, useState } from "react";
import PriorityStateQueue from "./PriorityStateQueue";
import { Layer, Priority, QueueTicket } from "./types";

interface SyncedStateContextValue {
  top: Map<Layer, QueueTicket>;

  addToQueue(layerName?: Layer, priority?: Priority): number;

  removeFromQueue(ticket: QueueTicket, layerName?: Layer, priority?: Priority): void;
}

export const SyncedStateContext = React.createContext<SyncedStateContextValue>({
  top: new Map(),
  addToQueue() {
    return 0;
  },
  removeFromQueue() {
    // do nothing
  },
});

export const SyncedStateProvider: React.FC = ({ children }) => {
  const priorityQueue = useRef(new PriorityStateQueue());
  const [top, setTop] = useState<SyncedStateContextValue["top"]>(new Map());
  const currentTicketNumber = useRef(0);

  const addToQueue = useCallback((layerName?: Layer, priority?: Priority) => {
    priorityQueue.current.insert(currentTicketNumber.current, layerName, priority);
    setTop(priorityQueue.current.getNextEntries());
    return currentTicketNumber.current++;
  }, []);

  const removeFromQueue = useCallback((ticket: QueueTicket, layerName?: Layer, priority?: Priority) => {
    priorityQueue.current.delete(ticket, layerName, priority);
    setTop(priorityQueue.current.getNextEntries());
  }, []);

  const value: SyncedStateContextValue = useMemo(
    () => ({
      top,
      addToQueue,
      removeFromQueue,
    }),
    [top, addToQueue, removeFromQueue]
  );

  return <SyncedStateContext.Provider value={value}>{children}</SyncedStateContext.Provider>;
};

export default SyncedStateProvider;
