var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var PriorityStateQueue = /** @class */ (function () {
    function PriorityStateQueue() {
        this.layers = new Map();
        this.heap = [];
    }
    PriorityStateQueue.prototype.checkHeapIndex = function (index) {
        if (index < 0) {
            throw new Error("Index ".concat(index, " is a negative value"));
        }
        if (index >= this.heap.length) {
            throw new Error("Index ".concat(index, " is out of bounds for heap of length ").concat(this.heap.length));
        }
    };
    PriorityStateQueue.prototype.getLeftChildIndex = function (index) {
        this.checkHeapIndex(index);
        var value = 2 * index + 1;
        return value < this.heap.length ? value : null;
    };
    PriorityStateQueue.prototype.getRightChildIndex = function (index) {
        this.checkHeapIndex(index);
        var value = 2 * index + 2;
        return value < this.heap.length ? value : null;
    };
    PriorityStateQueue.prototype.getParentIndex = function (index) {
        this.checkHeapIndex(index);
        if (index === 0) {
            return null;
        }
        return Math.floor((index - 1) / 2);
    };
    PriorityStateQueue.prototype.swapHeapElements = function (index1, index2) {
        this.checkHeapIndex(index1);
        this.checkHeapIndex(index2);
        var temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    };
    PriorityStateQueue.prototype.heapify = function (index) {
        this.checkHeapIndex(index);
        if (index > this.heap.length || index < 0) {
            throw new Error("Cannot heapify at index ".concat(index));
        }
        var largest = index;
        var left = this.getLeftChildIndex(index);
        var right = this.getRightChildIndex(index);
        if (left && this.heap[left] > this.heap[largest]) {
            largest = left;
        }
        if (right && this.heap[right] > this.heap[largest]) {
            largest = right;
        }
        if (largest !== index) {
            this.swapHeapElements(largest, index);
            this.heapify(largest);
        }
    };
    PriorityStateQueue.prototype.heapInsert = function (priority) {
        var e_1, _a, e_2, _b;
        try {
            for (var _c = __values(this.layers.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var layer = _d.value;
                try {
                    for (var _e = (e_2 = void 0, __values(layer.keys())), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var priority_1 = _f.value;
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    PriorityStateQueue.prototype.heapDelete = function () { };
    PriorityStateQueue.prototype.insert = function (ticket, priority, layerName) {
        if (priority === void 0) { priority = 0; }
        if (layerName === void 0) { layerName = 'default'; }
        if (!this.layers.has(layerName)) {
            this.layers.set(layerName, new Map());
        }
        var layer = this.layers.get(layerName);
        if (!layer.has(priority)) {
            layer.set(priority, []);
        }
        var queue = layer.get(priority);
        queue.push(ticket);
    };
    return PriorityStateQueue;
}());
export {};
//# sourceMappingURL=PriorityStateQueue.js.map