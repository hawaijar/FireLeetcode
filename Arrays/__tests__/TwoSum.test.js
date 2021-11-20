import TwoSum from "../TwoSum/";

const object = new TwoSum();
const arrays = [
  [10, -21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
  [3, 5, -4, 8, 11, 1, -1, 6, 1],
  [1, 4, 6, 1, -3],
  [1, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, -7, -5, -3, -1, 0, 1, 3, 5, 7],
  [1, -21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
];
const targetSums = [20, 10, 3, 17, -5, 163];
const solutions = [[], [11, -1], [6, -3], [8, 9], [-5, 0], [210, -47]];

describe("Testing Index problem", () => {
  for (let i = 0; i < arrays.length; i++) {
    test(`Test: ${i + 1}`, () => {
      object.setInput(arrays[i], targetSums[i]);
      expect(object.solution1()).toEqual(solutions[i]);
    });
  }
  test("Test: default condition", () => {
    object.setInput();
    expect(object.solution1()).toEqual([]);
  });
});
