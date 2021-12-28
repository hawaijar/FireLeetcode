import BracketsMatching from "../../Stacks/BracketsMatching";

const object = new BracketsMatching();
const problems = [
  "()",
  "((([]{})))",
  "ab(({}cd[xyz]))",
  "((((}}}}",
  "[[[{{]]]]",
  "))",
];
const solutions = [true, true, true, false, false, false];

describe("Testing solutions for BracketsMatching problem", () => {
  // Suite for solution1 (Brute force)
  describe("Testing Solution1", () => {
    for (let i = 0; i < problems.length; i++) {
      test(`Test: ${i + 1}`, () => {
        expect(object.solution(problems[i])).toEqual(solutions[i]);
      });
    }
    test("Test: default condition", () => {
      expect(object.solution("")).toEqual(true);
      expect(object.solution("(")).toEqual(false);
    });
  });
});
