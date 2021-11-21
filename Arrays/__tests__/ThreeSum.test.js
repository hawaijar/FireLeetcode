import ThreeSum from "../ThreeSum/";

const object = new ThreeSum();
const arrays = [
  [12, 3, 4, 1, 6, 9],
  [],
  [1, 2, 3, 4, 5],
  [-1, -1, -1],
  [1, 2, 3, 4, 5],
  [12, 3, 4, 1, 6, 9, 9, 9, 9],
  [12, 3, 4, 1, 6, 9, 9, 9, 9, 50, 70, 70, 70],
];
const targetSums = [24, 10, 9, -3, 20, 24, 24];
const solutions = [
  [12, 3, 9],
  [],
  [5, 3, 1],
  [-1, -1, -1],
  [],
  [12, 3, 9],
  [12, 3, 9],
];

describe("Testing solutions for ThreeSum problem", () => {
  // Suite for solution2
  describe("Testing Solution2", () => {
    const object2 = new ThreeSum();
    for (let i = 0; i < arrays.length; i++) {
      test(`Test: ${i + 1}`, () => {
        object2.setInput(arrays[i], targetSums[i]);
        expect(object2.solution2().sort()).toEqual(solutions[i].sort());
      });
    }
    test("Test: default condition", () => {
      object2.setInput();
      expect(object2.solution2()).toEqual([]);
    });
  });
  // Suite for solution3
  describe("Testing Solution3", () => {
    const object3 = new ThreeSum();
    for (let i = 0; i < arrays.length; i++) {
      test(`Test: ${i + 1}`, () => {
        object3.setInput(arrays[i], targetSums[i]);
        expect(object3.solution3().sort()).toEqual(solutions[i].sort());
      });
    }
    test("Test: default condition", () => {
      object3.setInput();
      expect(object3.solution3()).toEqual([]);
    });
  });
});
