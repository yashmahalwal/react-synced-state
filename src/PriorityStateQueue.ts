import { defaultLayerName, defaultPriority, Layer, Priority, QueueTicket } from "./types";

export default class PriorityStateQueue {
  private layers: Map<Layer, { map: Map<Priority, QueueTicket[]>; heap: QueueTicket[] }> = new Map();

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
    return value < length ? value : null;
  }

  private static getRightChildIndex(index: number, heap: QueueTicket[]) {
    PriorityStateQueue.checkHeapIndex(index, heap);
    const value = 2 * index + 2;
    return value < length ? value : null;
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

    let temp = heap[index1];
    heap[index1] = heap[index2];
    heap[index2] = temp;
  }

  private heapify(index: number, heap: QueueTicket[]) {
    PriorityStateQueue.checkHeapIndex(index, heap);
    if (index > length || index < 0) {
      throw new Error(`Cannot heapify at index ${index}`);
    }
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
    if (!this.layers.has(layerName)) {
      this.layers.set(layerName, { map: new Map(), heap: [] });
    }

    const layer = this.layers.get(layerName)!;
    const { map: layerMap, heap: layerHeap } = layer;
    if (!layerMap.has(priority)) {
      layerMap.set(priority, []);
      layerHeap.push(priority);
      let index = layerHeap.length - 1;
      let parent = PriorityStateQueue.getParentIndex(index, layerHeap);
      // Bubble up
      while (parent) {
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
    // Actively delete from queue, lazy delete from heap
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
    }
  }

  private getNextEntry(layerName: Layer = defaultLayerName) {
    if (!this.layers.has(layerName)) {
      return;
    }

    const layer = this.layers.get(layerName)!;
    // Lazy delete from heap
    for (let top = layer.heap[0]; layer.heap.length && !layer.map.has(top); ) {
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
      e && records.set(key, e);
    }
    return records;
  }
}
