/**
 * A number assigned to every entry in the state queue.
 */
export type QueueTicket = number;

/**
 * Priority assigned to state update calls.
 */
export type Priority = number;

/**
 * Different layers for state updates. Updates related to a layer are synchronized together
 * and independently of other updates.
 */
export type Layer = string;

/**
 * Name of the default layer.
 */
export const defaultLayerName: Layer = "default";

/**
 * Configuration options for components.
 * @template T - The type of entry in the state queue.
 */
export interface Config<T> {
  /**
   * The layer to which the state update belongs.
   */
  layer?: Layer;

  /**
   * The priority assigned to the state update.
   */
  priority?: Priority;

  /**
   * Custom function to determine whether an entry should be dequeued.
   * @param entry - The entry in the state queue.
   * @returns A boolean indicating whether the entry should be dequeued.
   */
  shouldDequeue?(entry: T): boolean;
}

/**
 * The default priority assigned to state updates.
 */
export const defaultPriority: Priority = 0;
