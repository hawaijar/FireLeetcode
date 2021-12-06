import ZigZagTraversal from "../ZigZagTraversal/";

const object = new ZigZagTraversal();
const arrays = [
  [
    [1, 3, 4, 10],
    [2, 5, 9, 11],
    [6, 8, 12, 15],
    [7, 13, 14, 16],
  ],
];
const solutions = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]];

describe("Testing solutions for ZigZagTraversal problem", () => {
  // Suite for solution1
  describe("Testing Solution", () => {
    for (let i = 0; i < arrays.length; i++) {
      test(`Test: ${i + 1}`, () => {
        expect(object.zigzagTraverse(arrays[i])).toEqual(solutions[i]);
      });
    }
    test("Test: default condition", () => {
      expect(object.zigzagTraverse([[]])).toEqual([]);
    });
  });
});
