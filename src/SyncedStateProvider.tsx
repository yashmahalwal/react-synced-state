import React, { PropsWithChildren, useCallback, useMemo, useRef, useState } from "react";
import PriorityStateQueue from "./PriorityStateQueue";
import { Layer, Priority, QueueTicket } from "./types";

/**
 * Represents the context exposed by `SyncedStateProvider`.
 */
interface SyncedStateContextValue {
  /** A map containing the front of queue ticket for each layer. */
  top: Map<Layer, QueueTicket>;

  /**
   * Adds a ticket to the priority state queue for synchronization.
   * @param {Layer} [layerName] - The layer name.
   * @param {Priority} [priority] - The priority level.
   * @returns {number} The assigned queue ticket number.
   */
  addToQueue(layerName?: Layer, priority?: Priority): number;

  /**
   * Removes a ticket from the priority state queue.
   * @param {QueueTicket} ticket - The ticket to remove.
   * @param {Layer} [layerName] - The layer name.
   * @param {Priority} [priority] - The priority level.
   */
  removeFromQueue(ticket: QueueTicket, layerName?: Layer, priority?: Priority): void;
}

/** Context for synchronizing state updates across components. */
export const SyncedStateContext = React.createContext<SyncedStateContextValue>({
  top: new Map(),
  addToQueue() {
    return 0;
  },
  removeFromQueue() {
    // do nothing
  },
});

/**
 * Provides the `SyncedStateContext` to its children, facilitating synchronized state updates.
 * @param {PropsWithChildren} props - Component properties.
 * @returns {React.FC<PropsWithChildren>} The `SyncedStateProvider` component.
 */
export const SyncedStateProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const priorityQueue = useRef(new PriorityStateQueue());
  const [top, setTop] = useState<SyncedStateContextValue["top"]>(new Map());
  const currentTicketNumber = useRef(1);

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
