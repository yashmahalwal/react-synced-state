import {defaultLayerName, defaultPriority} from "./types.js";
export default class PriorityStateQueue {
  constructor() {
    this.layers = new Map();
  }
  static checkHeapIndex(index, heap) {
    if (index < 0) {
      throw new Error(`Index ${index} is a negative value`);
    }
    if (index >= heap.length) {
      throw new Error(`Index ${index} is out of bounds for heap of length ${heap}`);
    }
  }
  static getLeftChildIndex(index, heap) {
    PriorityStateQueue.checkHeapIndex(index, heap);
    const value = 2 * index + 1;
    return value < heap.length ? value : null;
  }
  static getRightChildIndex(index, heap) {
    PriorityStateQueue.checkHeapIndex(index, heap);
    const value = 2 * index + 2;
    return value < heap.length ? value : null;
  }
  static getParentIndex(index, heap) {
    PriorityStateQueue.checkHeapIndex(index, heap);
    if (index === 0) {
      return null;
    }
    return Math.floor((index - 1) / 2);
  }
  static swapHeapElements(index1, index2, heap) {
    PriorityStateQueue.checkHeapIndex(index1, heap);
    PriorityStateQueue.checkHeapIndex(index2, heap);
    const temp = heap[index1];
    heap[index1] = heap[index2];
    heap[index2] = temp;
  }
  heapify(index, heap) {
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
  insert(ticket, layerName = defaultLayerName, priority = defaultPriority) {
    if (!this.layers.has(layerName)) {
      this.layers.set(layerName, {map: new Map(), heap: []});
    }
    const layer = this.layers.get(layerName);
    const {map: layerMap, heap: layerHeap} = layer;
    if (!layerMap.has(priority)) {
      layerMap.set(priority, []);
      layerHeap.push(priority);
      let index = layerHeap.length - 1;
      let parent = PriorityStateQueue.getParentIndex(index, layerHeap);
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
    const queue = layerMap.get(priority);
    queue.push(ticket);
  }
  delete(ticket, layerName = defaultLayerName, priority = defaultPriority) {
    if (!this.layers.has(layerName)) {
      return;
    }
    const layer = this.layers.get(layerName);
    if (!layer.map.has(priority)) {
      return;
    }
    const queue = layer.map.get(priority);
    const filteredQueue = queue.filter((t) => t !== ticket);
    if (queue.length === filteredQueue.length) {
      return;
    }
    if (filteredQueue.length) {
      layer.map.set(priority, filteredQueue);
    } else {
      layer.map.delete(priority);
      if (layer.map.size === 0) {
        this.layers.delete(layerName);
      }
    }
  }
  getNextEntry(layerName = defaultLayerName) {
    if (!this.layers.has(layerName)) {
      return;
    }
    const layer = this.layers.get(layerName);
    for (let top = layer.heap[0]; layer.heap.length && !layer.map.has(top); top = layer.heap[0]) {
      if (layer.heap.length === 1) {
        layer.heap.pop();
      } else {
        layer.heap[0] = layer.heap.pop();
        this.heapify(0, layer.heap);
      }
    }
    if (!layer.heap.length) {
      return null;
    }
    return layer.map.get(layer.heap[0])[0];
  }
  getNextEntries() {
    const records = new Map();
    for (const key of this.layers.keys()) {
      const e = this.getNextEntry(key);
      typeof e === "number" && records.set(key, e);
    }
    return records;
  }
}
