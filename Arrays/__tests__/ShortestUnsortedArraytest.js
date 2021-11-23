import ShortestUnsortedArray from "../ShortestUnsortedArray/";

const object = new ShortestUnsortedArray();
const arrays = [[1, 2], [], [5, 4, 3, 2, 1], [1, 2, 6, 5, 3, 4, 8]];
const solutions = [
  [-1, -1],
  [-1, -1],
  [0, 4],
  [2, 5],
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
});
