import { quickSort } from "../index";

describe("QuickSort Testing", () => {
  it("should sort array[1,3,4,5,2,1]", () => {
    const array = [1, 3, 4, 5, 2, 1];
    const sortedArray = array.sort((a, b) => a - b);
    quickSort(array);
    expect(array).toEqual(sortedArray);
  });
  it("should sort array[5, 4, 3, 2, 1, 0]", () => {
    const array = [5, 4, 3, 2, 1, 0];
    const sortedArray = array.sort((a, b) => a - b);
    quickSort(array);
    expect(array).toEqual(sortedArray);
  });
  it("should sort array[-5, -4, -13, -2, -1, 10]", () => {
    const array = [-5, -4, -13, -2, -1, 10];
    const sortedArray = array.sort((a, b) => a - b);
    quickSort(array);
    expect(array).toEqual(sortedArray);
  });
});
