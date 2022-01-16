import PriorityStateQueue from "../src/PriorityStateQueue";
import { defaultLayerName } from "../src";
import Chance from "chance";
import { QueueTicket } from "../src/types";

const chance = new Chance();

describe("Priority State Queue", () => {
  let priorityQueue: PriorityStateQueue;
  const makeTickets = (min: number, max: number) => new Array(chance.integer({ max, min })).fill(0).map((_, i) => i);
  const getLayers = () => Array.from(priorityQueue.getNextEntries().entries());
  beforeEach(() => {
    priorityQueue = new PriorityStateQueue();
  });

  it("Acts as a FIFO queue without layers and priorities", () => {
    const ticketNumbers = makeTickets(5, 10);
    expect(getLayers().length).toEqual(0);
    ticketNumbers.forEach((ticket) => {
      priorityQueue.insert(ticket);
      expect(getLayers().length).toEqual(1);
    });
    for (const ticket of ticketNumbers) {
      expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(ticket);
      expect(getLayers().length).toEqual(1);
      priorityQueue.delete(ticket);
    }
    expect(getLayers().length).toEqual(0);
  });

  it("Acts as a priority FIFO queue without layers", () => {
    const lowestPriority = -1;
    const moderatePriority = 5;
    const highestPriority = 100;
    // default priority = defaultPriority

    const tickets = makeTickets(12, 12);
    expect(getLayers().length).toEqual(0);

    // 0: t0
    priorityQueue.insert(tickets[0]);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[0]);

    // 0: t0 t1
    priorityQueue.insert(tickets[1]);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[0]);

    // -1: t2
    // 0: t0 t1
    priorityQueue.insert(tickets[2], undefined, lowestPriority);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[0]);

    // -1: t2
    // 0: t1
    priorityQueue.delete(tickets[0]);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[1]);

    // -1: t2
    // 0: t1
    // 5: t3
    priorityQueue.insert(tickets[3], undefined, moderatePriority);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[3]);

    // -1: t2
    // 0: t1
    // 5: t3 t4
    priorityQueue.insert(tickets[4], undefined, moderatePriority);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[3]);

    // -1: t2
    // 0: t1 t5
    // 5: t3 t4
    priorityQueue.insert(tickets[5], undefined, moderatePriority);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[3]);

    // -1: t2
    // 0: t1 t5
    // 5: t3 t4
    // 100: t6
    priorityQueue.insert(tickets[6], undefined, highestPriority);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[6]);

    // -1: t2
    // 0: t1 t5
    // 5: t4
    // 100: t6
    priorityQueue.delete(tickets[3], undefined, moderatePriority);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[6]);

    // -1: t2
    // 0: t1 t5
    // 5: t4
    // 100: t6 t7
    priorityQueue.insert(tickets[7], undefined, highestPriority);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[6]);

    // -1: t2
    // 0: t1 t5
    // 5: t4
    // 100: t6
    priorityQueue.delete(tickets[7], undefined, highestPriority);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[6]);

    // -1: t2
    // 0: t1 t5
    // 5: t4
    priorityQueue.delete(tickets[6], undefined, highestPriority);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[4]);

    // -1: t2
    // 0: t1
    // 5: t4
    priorityQueue.delete(tickets[5], undefined, moderatePriority);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[4]);

    // -1: t2
    // 0: t1
    priorityQueue.delete(tickets[4], undefined, moderatePriority);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[1]);

    // -1: t2
    priorityQueue.delete(tickets[1]);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[2]);

    priorityQueue.delete(tickets[2], undefined, lowestPriority);
    expect(getLayers().length).toEqual(0);
  });

  it("Acts as independent FIFO queue across layers", () => {
    const firstLayer = chance.string();
    const secondLayer = chance.string();
    if (firstLayer === secondLayer) {
      throw new Error("Both layers have the same name");
    }

    const ticketStore: Record<string, QueueTicket[]> = {};
    [firstLayer, secondLayer, defaultLayerName].forEach((layer) => (ticketStore[layer] = makeTickets(3, 3)));

    expect(getLayers().length).toEqual(0);

    // D:
    // F: f0
    // S:
    priorityQueue.insert(ticketStore[firstLayer][0], firstLayer);
    let layers = getLayers();
    expect(layers.length).toEqual(1);
    expect(priorityQueue.getNextEntries().get(firstLayer)).toEqual(ticketStore[firstLayer][0]);

    // D:
    // F: f0
    // S: s0
    priorityQueue.insert(ticketStore[secondLayer][0], secondLayer);
    layers = getLayers();
    expect(layers.length).toEqual(2);
    expect(priorityQueue.getNextEntries().get(secondLayer)).toEqual(ticketStore[secondLayer][0]);

    // D: d0
    // F: f0
    // S: s0
    priorityQueue.insert(ticketStore[defaultLayerName][0]);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(ticketStore[defaultLayerName][0]);

    // D: d0
    // F: f0
    priorityQueue.delete(ticketStore[secondLayer][0], secondLayer);
    layers = getLayers();
    expect(layers.length).toEqual(2);
    expect(priorityQueue.getNextEntries().get(secondLayer)).toBeFalsy();

    // D: d0 d1 d2
    // F: f0
    priorityQueue.insert(ticketStore[defaultLayerName][1]);
    priorityQueue.insert(ticketStore[defaultLayerName][2]);
    layers = getLayers();
    expect(layers.length).toEqual(2);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(ticketStore[defaultLayerName][0]);

    // D: d0 d1 d2
    // F: f0
    // S: s1
    priorityQueue.insert(ticketStore[secondLayer][1], secondLayer);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(secondLayer)).toEqual(ticketStore[secondLayer][1]);

    // D: d0 d2
    // F: f0
    // S: s1
    priorityQueue.delete(ticketStore[defaultLayerName][1]);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(ticketStore[defaultLayerName][0]);

    // D: d0 d2
    // F: f0 f1
    // S: s1
    priorityQueue.insert(ticketStore[firstLayer][1], firstLayer);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(firstLayer)).toEqual(ticketStore[firstLayer][0]);

    // D: d0 d2
    // F: f0 f1 f2
    // S: s1
    priorityQueue.insert(ticketStore[firstLayer][2], firstLayer);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(firstLayer)).toEqual(ticketStore[firstLayer][0]);

    // D: d0 d2
    // F: f0 f1 f2
    // S: s1 s2
    priorityQueue.insert(ticketStore[secondLayer][2], secondLayer);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(secondLayer)).toEqual(ticketStore[secondLayer][1]);

    // D: d0
    // F: f0 f2
    // S: s2
    priorityQueue.delete(ticketStore[defaultLayerName][2]);
    priorityQueue.delete(ticketStore[firstLayer][1], firstLayer);
    priorityQueue.delete(ticketStore[secondLayer][1], secondLayer);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(ticketStore[defaultLayerName][0]);
    expect(priorityQueue.getNextEntries().get(secondLayer)).toEqual(ticketStore[secondLayer][2]);
    expect(priorityQueue.getNextEntries().get(firstLayer)).toEqual(ticketStore[firstLayer][0]);

    // F: f2
    // S: s2
    priorityQueue.delete(ticketStore[defaultLayerName][0]);
    priorityQueue.delete(ticketStore[firstLayer][0], firstLayer);
    layers = getLayers();
    expect(layers.length).toEqual(2);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toBeFalsy();
    expect(priorityQueue.getNextEntries().get(secondLayer)).toEqual(ticketStore[secondLayer][2]);
    expect(priorityQueue.getNextEntries().get(firstLayer)).toEqual(ticketStore[firstLayer][2]);

    priorityQueue.delete(ticketStore[firstLayer][2], firstLayer);
    priorityQueue.delete(ticketStore[secondLayer][2], secondLayer);
    layers = getLayers();
    expect(layers.length).toEqual(0);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toBeFalsy();
    expect(priorityQueue.getNextEntries().get(firstLayer)).toBeFalsy();
    expect(priorityQueue.getNextEntries().get(secondLayer)).toBeFalsy();
  });

  it("Acts as independent priority FIFO queues across layers", () => {
    // Weird nomenclature due to the docs-source I penned down

    // Priorities
    const A = -1;
    // B = default priority
    const C = 10;
    const D = 100;

    const tickets = makeTickets(21, 21);

    // Layers
    // R = default layer
    const T = chance.string();
    const L = chance.string();

    if (T === L) {
      throw new Error("Both layers have the same name");
    }

    priorityQueue.insert(tickets[1], undefined, A);
    let layers = getLayers();
    expect(layers.length).toEqual(1);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[1]);

    priorityQueue.insert(tickets[2], T, C);
    layers = getLayers();
    expect(layers.length).toEqual(2);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[1]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[2]);

    priorityQueue.insert(tickets[3], T);
    layers = getLayers();
    expect(layers.length).toEqual(2);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[1]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[2]);

    priorityQueue.delete(tickets[2], T, C);
    layers = getLayers();
    expect(layers.length).toEqual(2);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[1]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[3]);

    priorityQueue.insert(tickets[4], L, A);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[1]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[3]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[4]);

    priorityQueue.insert(tickets[5], undefined, C);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[5]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[3]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[4]);

    priorityQueue.delete(tickets[1], undefined, A);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[5]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[3]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[4]);

    priorityQueue.insert(tickets[6], L, D);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[5]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[3]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[6]);

    priorityQueue.insert(tickets[7], undefined, D);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[7]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[3]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[6]);

    priorityQueue.insert(tickets[8], T);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[7]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[3]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[6]);

    priorityQueue.delete(tickets[7], undefined, D);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[5]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[3]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[6]);

    priorityQueue.delete(tickets[3], T);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[5]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[8]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[6]);

    priorityQueue.delete(tickets[4], L, A);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[5]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[8]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[6]);

    priorityQueue.insert(tickets[9], T, A);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[5]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[8]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[6]);

    priorityQueue.insert(tickets[10], L, A);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[5]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[8]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[6]);

    priorityQueue.insert(tickets[11], L, C);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[5]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[8]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[6]);

    priorityQueue.insert(tickets[11], L, C);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[5]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[8]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[6]);

    priorityQueue.delete(tickets[8], T);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[5]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[9]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[6]);

    priorityQueue.delete(tickets[9], T, A);
    layers = getLayers();
    expect(layers.length).toEqual(2);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[5]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[6]);

    priorityQueue.delete(tickets[6], L, D);
    layers = getLayers();
    expect(layers.length).toEqual(2);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[5]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[11]);

    priorityQueue.insert(tickets[12]);
    layers = getLayers();
    expect(layers.length).toEqual(2);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[5]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[11]);

    priorityQueue.insert(tickets[13], T, C);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[5]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[11]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[13]);

    priorityQueue.insert(tickets[14], undefined, D);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[14]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[11]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[13]);

    priorityQueue.insert(tickets[15], L, A);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[14]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[11]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[13]);

    priorityQueue.delete(tickets[5], undefined, C);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[14]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[11]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[13]);

    priorityQueue.delete(tickets[14], undefined, D);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[12]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[11]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[13]);

    priorityQueue.delete(tickets[11], L, C);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[12]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[10]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[13]);

    priorityQueue.delete(tickets[13], T, C);
    layers = getLayers();
    expect(layers.length).toEqual(2);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[12]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[10]);

    priorityQueue.insert(tickets[16], undefined, A);
    layers = getLayers();
    expect(layers.length).toEqual(2);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[12]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[10]);

    priorityQueue.insert(tickets[17], T, D);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[12]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[10]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[17]);

    priorityQueue.insert(tickets[18]);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[12]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[10]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[17]);

    priorityQueue.delete(tickets[12]);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[18]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[10]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[17]);

    priorityQueue.delete(tickets[17], T, D);
    layers = getLayers();
    expect(layers.length).toEqual(2);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[18]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[10]);

    priorityQueue.delete(tickets[10], L, A);
    layers = getLayers();
    expect(layers.length).toEqual(2);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[18]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[15]);

    priorityQueue.insert(tickets[19], L, C);
    layers = getLayers();
    expect(layers.length).toEqual(2);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[18]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[19]);

    priorityQueue.insert(tickets[20], T, C);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[18]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[19]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[20]);

    priorityQueue.delete(tickets[19], L, C);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[18]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[15]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[20]);

    priorityQueue.delete(tickets[16], undefined, A);
    layers = getLayers();
    expect(layers.length).toEqual(3);
    expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(tickets[18]);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[15]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[20]);

    priorityQueue.delete(tickets[18]);
    layers = getLayers();
    expect(layers.length).toEqual(2);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[15]);
    expect(priorityQueue.getNextEntries().get(T)).toEqual(tickets[20]);

    priorityQueue.delete(tickets[20], T, C);
    layers = getLayers();
    expect(layers.length).toEqual(1);
    expect(priorityQueue.getNextEntries().get(L)).toEqual(tickets[15]);

    priorityQueue.delete(tickets[15], L, A);
    layers = getLayers();
    expect(layers.length).toEqual(0);
  });
});
