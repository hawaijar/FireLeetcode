import NextPermutation from "../NextPermutation/";

const object = new NextPermutation();
const arrays = [
  [],
  [1],
  [3, 2, 1],
  [1, 2, 3],
  [1, 1, 5],
  [0, 1, 2, 5, 3, 3, 0],
];
const solutions = [
  [],
  [1],
  [1, 2, 3],
  [1, 3, 2],
  [1, 5, 1],
  [0, 1, 3, 0, 2, 3, 5],
];

describe("Testing solutions for NextPermutation problem", () => {
  for (let i = 0; i < arrays.length; i++) {
    test(`Test: ${i + 1}`, () => {
      object.solution(arrays[i]);
      expect(arrays[i]).toEqual(solutions[i]);
    });
  }
});
