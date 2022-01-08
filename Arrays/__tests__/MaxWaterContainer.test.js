import MaxWaterContainer from "../MaxWaterContainer/";

const object = new MaxWaterContainer();
const arrays = [[1, 8, 6, 2, 5, 4, 8, 3, 7], [1, 1], [1]];
const solutions = [49, 1, 0];

describe("Testing solutions for MaxWaterContainer problem", () => {
  for (let i = 0; i < arrays.length; i++) {
    test(`Test: ${i + 1}`, () => {
      expect(object.solution(arrays[i])).toEqual(solutions[i]);
    });
  }
});
