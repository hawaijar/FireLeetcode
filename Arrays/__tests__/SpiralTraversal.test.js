import SpiralTraversal from "../SpiralTraversal/";

const object = new SpiralTraversal();
const arrays = [
  [
    [1, 2],
    [6, 3],
    [5, 4],
  ],
  [
    [1, 2],
    [4, 3],
  ],
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ],
  [[1], [2], [3]],
  [[1, 2, 3]],
];
const solutions = [
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4],
  [1, 2, 3, 4, 8, 7, 6, 5],
  [1, 2, 3],
  [1, 2, 3],
];

describe("Testing solutions for SpiralTraversal problem", () => {
  // Suite for solution1
  describe("Testing Solution", () => {
    for (let i = 0; i < arrays.length; i++) {
      test(`Test: ${i + 1}`, () => {
        expect(object.solution(arrays[i])).toEqual(solutions[i]);
      });
    }
    test("Test: default condition", () => {
      expect(object.solution([[]])).toEqual([]);
    });
  });
});
