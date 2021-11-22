import LargestRange from "../LargestRange/";

const object = new LargestRange();
const arrays = [
  [1, 1, 1, 3, 4],
  [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6],
  [1],
  [1, 2],
];
const solutions = [
  [3, 4],
  [0, 7],
  [1, 1],
  [1, 2],
];

describe("Testing solutions for LargestRange problem", () => {
  // Suite for solution1 (Brute force)
  describe("Testing Solution1", () => {
    const object1 = new LargestRange();
    for (let i = 0; i < arrays.length; i++) {
      test(`Test: ${i + 1}`, () => {
        object1.setInput(arrays[i]);
        expect(object1.solution1().sort()).toEqual(solutions[i].sort());
      });
    }
    test("Test: default condition", () => {
      object1.setInput();
      expect(object1.solution1()).toEqual([]);
    });
  });
});
