import { findNthFib, minChange, sumPossible } from "../FibAndCoinIssues";

describe("Testing Finding Nth Fibonacci", () => {
  test("findNthFib(0) == 0", () => {
    expect(findNthFib(0)).toBe(0);
  });
  test("findNthFib(5) == 5", () => {
    expect(findNthFib(5)).toBe(5);
  });
  test("findNthFib(35) == 9227465", () => {
    expect(findNthFib(35)).toBe(9227465);
  });
  test("findNthFib(46) == 1836311903", () => {
    expect(findNthFib(46)).toBe(1836311903);
  });
});

describe("Testing sumPossible", () => {
  test("sumPossible(8, [5, 12, 4]) == true", () => {
    expect(sumPossible(8, [5, 12, 4])).toBe(true);
  });
  test("sumPossible(15, [6, 2, 10, 19]) == false", () => {
    expect(sumPossible(15, [6, 2, 10, 19])).toBe(false);
  });
  test("sumPossible(271, [10, 8, 265, 24]) == false", () => {
    expect(sumPossible(271, [10, 8, 265, 24])).toBe(false);
  });
});

describe("Testing minChange", () => {
  test("minChange(8, [1, 5, 4, 12]) == 2", () => {
    expect(minChange(8, [1, 5, 4, 12])).toBe(2);
  });
  test("minChange(13, [1, 9, 5, 14, 30]) == 5", () => {
    expect(minChange(13, [1, 9, 5, 14, 30])).toBe(5);
  });
  test("minChange(2017, [4, 2, 10]) == -1", () => {
    expect(minChange(2017, [4, 2, 10])).toBe(-1);
  });
});
