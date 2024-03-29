import { defaultLayerName, defaultPriority, Layer, Priority, QueueTicket } from "./types";

/**
 * Represents a heap based priority queue used for synchronizing state updates.
 * It has independent queues corresponding to each provided layer
 * Each layer queue has a max heap of priorities
 * and a map of priorities vs FIFO ticket queue over that priority
 */
export default class PriorityStateQueue {
  private layers: Map<Layer, { map: Map<Priority, QueueTicket[]>; heap: Priority[] }> = new Map();

  private static checkHeapIndex(index: number, heap: QueueTicket[]) {
    if (index < 0) {
      throw new Error(`Index ${index} is a negative value`);
    }
    if (index >= heap.length) {
      throw new Error(`Index ${index} is out of bounds for heap of length ${heap}`);
    }
  }

  private static getLeftChildIndex(index: number, heap: QueueTicket[]) {
    PriorityStateQueue.checkHeapIndex(index, heap);
    const value = 2 * index + 1;
    return value < heap.length ? value : null;
  }

  private static getRightChildIndex(index: number, heap: QueueTicket[]) {
    PriorityStateQueue.checkHeapIndex(index, heap);
    const value = 2 * index + 2;
    return value < heap.length ? value : null;
  }

  private static getParentIndex(index: number, heap: QueueTicket[]) {
    PriorityStateQueue.checkHeapIndex(index, heap);
    if (index === 0) {
      return null;
    }

    return Math.floor((index - 1) / 2);
  }

  private static swapHeapElements(index1: number, index2: number, heap: QueueTicket[]) {
    PriorityStateQueue.checkHeapIndex(index1, heap);
    PriorityStateQueue.checkHeapIndex(index2, heap);

    const temp = heap[index1];
    heap[index1] = heap[index2];
    heap[index2] = temp;
  }

  private heapify(index: number, heap: QueueTicket[]) {
    PriorityStateQueue.checkHeapIndex(index, heap);
    let largest = index;
    const left = PriorityStateQueue.getLeftChildIndex(index, heap);
    const right = PriorityStateQueue.getRightChildIndex(index, heap);
    if (left && heap[left] > heap[largest]) {
      largest = left;
    }
    if (right && heap[right] > heap[largest]) {
      largest = right;
    }
    if (largest !== index) {
      PriorityStateQueue.swapHeapElements(largest, index, heap);
      this.heapify(largest, heap);
    }
  }

  insert(ticket: QueueTicket, layerName: Layer = defaultLayerName, priority: Priority = defaultPriority) {
    // Getting current layer
    if (!this.layers.has(layerName)) {
      this.layers.set(layerName, { map: new Map(), heap: [] });
    }

    const layer = this.layers.get(layerName)!;

    // Get the map of priorities
    const { map: layerMap, heap: layerHeap } = layer;
    if (!layerMap.has(priority)) {
      // Initialise layer map and layer queue
      layerMap.set(priority, []);
      layerHeap.push(priority);
      let index = layerHeap.length - 1;
      let parent = PriorityStateQueue.getParentIndex(index, layerHeap);
      // Heap insert: Bubble up
      while (parent !== null) {
        if (layerHeap[parent] < layerHeap[index]) {
          PriorityStateQueue.swapHeapElements(parent, index, layerHeap);
        } else {
          break;
        }
        index = parent;
        parent = PriorityStateQueue.getParentIndex(index, layerHeap);
      }
    }

    const queue = layerMap.get(priority)!;
    queue.push(ticket);
  }

  delete(ticket: QueueTicket, layerName: Layer = defaultLayerName, priority: Priority = defaultPriority) {
    // Actively delete ticket from queue, lazy delete priority from heap
    if (!this.layers.has(layerName)) {
      return;
    }
    const layer = this.layers.get(layerName)!;
    if (!layer.map.has(priority)) {
      return;
    }

    const queue = layer.map.get(priority)!;
    const filteredQueue = queue.filter((t) => t !== ticket);
    // If ticket was not found in queue
    if (queue.length === filteredQueue.length) {
      return;
    }
    if (filteredQueue.length) {
      layer.map.set(priority, filteredQueue);
    } else {
      // Queue empty - delete priority. Map will never have an empty queue
      layer.map.delete(priority);
      if (layer.map.size === 0) {
        // No entry left anymore on this layer
        this.layers.delete(layerName);
      }
    }
  }

  private getNextEntry(layerName: Layer = defaultLayerName) {
    if (!this.layers.has(layerName)) {
      return;
    }

    const layer = this.layers.get(layerName)!;
    // Lazy delete from heap
    for (let top = layer.heap[0]; layer.heap.length && !layer.map.has(top); top = layer.heap[0]) {
      if (layer.heap.length === 1) {
        layer.heap.pop();
      } else {
        layer.heap[0] = layer.heap.pop()!;
        this.heapify(0, layer.heap);
      }
    }

    if (!layer.heap.length) {
      return null;
    }
    // Top of heap will always be present in priority map
    // The map will never have empty queue - check delete
    return layer.map.get(layer.heap[0])![0];
  }

  getNextEntries() {
    const records: Map<Layer, QueueTicket> = new Map();
    for (const key of this.layers.keys()) {
      const e = this.getNextEntry(key);
      typeof e === "number" && records.set(key, e);
    }
    return records;
  }
}
