import { MinHeap } from "../MinHeap";

const minHeap = new MinHeap();

describe("Testing MinHeap", () => {
  minHeap.clearHeap();
  let array = [30, 1, 2, 5, 7, 10, 20, 11, 1, 22, 2, 5, 17, 10, 20, -11];
  minHeap.buildHeapFromArray(array);
  let sortedArray = array.sort((a, b) => a - b);

  for (const number of sortedArray) {
    it(`should return ${number}`, () => {
      expect(minHeap.poll()).toBe(number);
    });
  }
});
