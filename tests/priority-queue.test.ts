import PriorityStateQueue from "../src/PriorityStateQueue";
import { randNatural } from "./utils";
import { defaultLayerName } from "../src/types";

describe("Priority State Queue", () => {
  let priorityQueue: PriorityStateQueue;
  beforeEach(() => {
    priorityQueue = new PriorityStateQueue();
  });

  it("Acts as a FIFO queue in most basic case", () => {
    const ticketNumbers = new Array(randNatural(10, 5)).fill(0).map((e, i) => i);
    ticketNumbers.forEach((ticket) => priorityQueue.insert(ticket));

    for (let ticket of ticketNumbers) {
      expect(priorityQueue.getNextEntries().get(defaultLayerName)).toEqual(ticket);
      priorityQueue.delete(ticket);
    }
  });
});
