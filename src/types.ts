// A number is assigned to every entry in state queue
export type QueueTicket = number;
// We can assign priority to state update calls
export type Priority = number;
// We can have different layers. Updates related to a layer are synced together and independently
// of other updates
export type Layer = string
// Name of default layer
export const defaultLayerName: Layer = 'default';
// Configuration for components
export interface Config<T>{
    layer?: Layer;
    priority?: Priority;
    shouldDequeue?(entry: T): boolean
}
// Default priority
export const defaultPriority: Priority = 0;
export const CheckFunction = (arg: any) => !arg;