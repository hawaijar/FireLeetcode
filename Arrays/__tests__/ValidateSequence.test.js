import ValidateSequence from "../ValidateSequence/";

const object = new ValidateSequence();
const arrays = [
  [5, 1, 22, 25, 6, -1, 8, 10],
  [5, 1, 22, 25, 6, -1, 8, 10],
  [5, 1, 22, 25, 6, -1, 8, 10],
  [5, 1, 22, 25, 6, -1, 8, 10],
  [1, 2, 3],
  [1, 2, 3, 4, 5, 6, 7],
  [],
  [],
];
const sequences = [
  [1, 6, -1, 10],
  [1, 6, 10],
  [25],
  [100],
  [1, 2, 3, 4],
  [10, 20, 30],
  [],
  [1, 2, 3],
];
const solutions = [true, true, true, false, false, false, true, false];

describe("Testing solutions for ValidateSequence problem", () => {
  // Suite for solution1
  describe("Testing Solution", () => {
    for (let i = 0; i < arrays.length; i++) {
      test(`Test: ${i + 1}`, () => {
        object.setInput(arrays[i], sequences[i]);
        expect(object.solution()).toEqual(solutions[i]);
      });
    }
    test("Test: default condition", () => {
      object.setInput();
      expect(object.solution()).toEqual(true);
    });
  });
});
