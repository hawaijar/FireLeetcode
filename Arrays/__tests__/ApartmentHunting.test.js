import ApartmentHunting from "../ApartmentHunting/";

const object = new ApartmentHunting();
const arrays = [
  [
    {
      foo: true,
      gym: false,
      kappa: false,
      office: true,
      school: true,
      store: false,
    },
    {
      foo: true,
      gym: true,
      kappa: false,
      office: false,
      school: false,
      store: false,
    },
    {
      foo: true,
      gym: true,
      kappa: false,
      office: false,
      school: true,
      store: false,
    },
    {
      foo: true,
      gym: false,
      kappa: false,
      office: false,
      school: true,
      store: false,
    },
    {
      foo: true,
      gym: true,
      kappa: false,
      office: false,
      school: true,
      store: false,
    },
    {
      foo: true,
      gym: false,
      kappa: false,
      office: false,
      school: true,
      store: true,
    },
  ],
];
const facilities = [["gym", "school", "store"]];
const solutions = [4];

describe("Testing solutions for ApartmentHunting problem", () => {
  // Suite for solution1
  describe("Testing Solution", () => {
    for (let i = 0; i < arrays.length; i++) {
      test(`Test: ${i + 1}`, () => {
        expect(object.solution(arrays[i], facilities[i])).toEqual(solutions[i]);
        expect(object.solution2(arrays[i], facilities[i])).toEqual(
          solutions[i]
        );
      });
    }
    test("Test: default condition", () => {
      expect(object.solution([], [])).toEqual(-1);
      expect(
        object.solution(
          [
            {
              foo: true,
              gym: false,
              kappa: false,
            },
          ],
          ["foo"]
        )
      ).toEqual(0);
      expect(object.solution2([], [])).toEqual(-1);
      expect(
        object.solution2(
          [
            {
              foo: true,
              gym: false,
              kappa: false,
            },
          ],
          ["foo"]
        )
      ).toEqual(0);
    });
  });
});
