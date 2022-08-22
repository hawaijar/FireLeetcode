import {
  permutationsOfString,
  permutationsOfNumbers,
  findNextGreaterPermutation,
} from "../Permutations/index";

describe("Permutations of String", () => {
  it("permutationsOfString('ABC'): ['ABC','ACB','BAC','BCA','CAB', 'CBA']", () => {
    expect(permutationsOfString("ABC")).toEqual([
      "ABC",
      "ACB",
      "BAC",
      "BCA",
      "CAB",
      "CBA",
    ]);
  });
});

describe("Permutations of Numbers", () => {
  it("permutationsOfNumbers([1,2,3]): [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]", () => {
    expect(permutationsOfNumbers([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });
});

describe("Finding next greater permutation", () => {
  it("findNextGreaterPermutation(1234): 1243", () => {
    expect(findNextGreaterPermutation(1234)).toBe(1243);
  });
  it("findNextGreaterPermutation(218765): 251678", () => {
    expect(findNextGreaterPermutation(218765)).toBe(251678);
  });
  it("findNextGreaterPermutation(4321): 1234", () => {
    expect(findNextGreaterPermutation(4321)).toBe(1234);
  });
  it("findNextGreaterPermutation(534976): 536479", () => {
    expect(findNextGreaterPermutation(534976)).toBe(536479);
  });
});
