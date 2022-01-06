import PriorityStateQueue from "../src/PriorityStateQueue";
import { defaultLayerName } from "../src/types";
import * as faker from "faker";

describe("Priority State Queue", () => {
  let priorityQueue: PriorityStateQueue;
  const makeTickets = (min: number, max: number) =>
    new Array(faker.datatype.number({ max, min, precision: 1 })).fill(0).map(() => faker.datatype.number());
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
});
