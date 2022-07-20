function getLengthB(
  string: string,
  lengthA: number,
  amountOfFirstLetter: number,
  amountOfSecondLetter: number
) {
  const length =
    (string.length - lengthA * amountOfFirstLetter) / amountOfSecondLetter;
  // should be a whole number
  if (length !== ~~length) {
    return -1;
  }
  return length;
}
class PatternMatcher {
  solution(pattern: string, string: string) {
    // base case
    if (pattern.length === 0 || pattern.length > string.length) {
      return [];
    }
    let firstLetter = pattern[0];
    let amountOfFirstLetter = 0;
    let amountOfSecondLetter = 0;
    let indexOfSecondLetter = -1;

    pattern.split("").forEach((char, i) => {
      if (char !== firstLetter) {
        if (indexOfSecondLetter === -1) {
          indexOfSecondLetter = i;
        }
        amountOfSecondLetter += 1;
      } else {
        amountOfFirstLetter += 1;
      }
    });
    // case 1 (where either 'x' or 'y' is not there in the pattern
    if (amountOfSecondLetter === 0) {
      const length = string.length / amountOfFirstLetter;
      // the above shouldn't be a fraction!
      if (length % 1 === 0) {
        const matchedString = string.slice(0, length);
        if (
          Array(amountOfFirstLetter).fill(matchedString).join("") === string
        ) {
          if (firstLetter === "x") {
            return [string.slice(0, length), ""];
          } else {
            return ["", string.slice(0, length)];
          }
        }
      }
    }
    // case 2: when both 'x and 'y' are present in the pattern.
    for (let lengthA = 1; lengthA < string.length; lengthA++) {
      const lengthB = getLengthB(
        string,
        lengthA,
        amountOfFirstLetter,
        amountOfSecondLetter
      );
      if (lengthB !== -1) {
        const stringA = string.slice(0, lengthA);
        const indexB = indexOfSecondLetter * lengthA;
        const stringB = string.slice(indexB, indexB + lengthB);
        const totalString = pattern
          .split("")
          .map((x) => {
            if (x === firstLetter) {
              return stringA;
            }
            return stringB;
          })
          .join("");
        if (totalString === string) {
          if (firstLetter === "x") {
            return [stringA, stringB];
          }
          return [stringB, stringA];
        }
      }
    }
    return [];
  }
}

// Testing

(function () {
  const obj = new PatternMatcher();
  const result = obj.solution("xxxyx", "bobbobbobmarybob");
  console.log(result);
})();
