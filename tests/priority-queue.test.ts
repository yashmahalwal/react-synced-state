import PriorityStateQueue from "../src/PriorityStateQueue";
import { randNatural } from "./utils";
import { defaultLayerName } from "../src/types";

describe("Priority State Queue", () => {
  let priorityQueue: PriorityStateQueue;
  const checkQueueEmpty = (shouldBeEmpty = true) => {
    if (shouldBeEmpty) {
      expect(Array.from(priorityQueue.getNextEntries().entries()).length).toEqual(0);
    } else {
      expect(Array.from(priorityQueue.getNextEntries().entries()).length).not.toEqual(0);
    }
  };
  beforeEach(() => {
    priorityQueue = new PriorityStateQueue();
  });

  it("Acts as a FIFO queue in most basic case", () => {
    checkQueueEmpty();
    const ticketNumbers = new Array(randNatural(10, 5)).fill(0).map((e, i) => i);
    ticketNumbers.forEach((ticket) => priorityQueue.insert(ticket));
    checkQueueEmpty(false);
    for (let ticket of ticketNumbers) {
      expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(ticket);
      priorityQueue.delete(ticket);
    }
    checkQueueEmpty();
  });
});
