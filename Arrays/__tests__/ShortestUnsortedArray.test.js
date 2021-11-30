import ShortestUnsortedArray from "../ShortestUnsortedArray/";

const object = new ShortestUnsortedArray();
const arrays = [
  [1, 2],
  [],
  [5, 4, 3, 2, 1],
  [1, 2, 6, 5, 3, 4, 8],
  [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19],
  [1, 2, 3, 4, 5, -1],
];
const solutions = [
  [-1, -1],
  [-1, -1],
  [0, 4],
  [2, 5],
  [3, 9],
  [0, 5],
];

describe("Testing solutions for ShortestUnsortedArray problem", () => {
  // Suite for solution1
  describe("Testing Solution1", () => {
    for (let i = 0; i < arrays.length; i++) {
      test(`Test: ${i + 1}`, () => {
        object.setInput(arrays[i]);
        expect(object.solution1()).toEqual(solutions[i]);
      });
    }
    test("Test: default condition", () => {
      object.setInput();
      expect(object.solution1()).toEqual([-1, -1]);
    });
  });
  describe("Testing Solution2", () => {
    for (let i = 0; i < arrays.length; i++) {
      test(`Test: ${i + 1}`, () => {
        object.setInput(arrays[i]);
        expect(object.solution2()).toEqual(solutions[i]);
      });
    }
    test("Test: default condition", () => {
      object.setInput();
      expect(object.solution2()).toEqual([-1, -1]);
    });
  });
});
