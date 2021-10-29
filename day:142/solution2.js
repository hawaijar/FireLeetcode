/**
 *
 * @param h1 (bigger string)
 * @param h2 (smaller string)
 * @return {boolean}
 */
function hashesMatching(h1, h2) {
  for (let key in h2) {
    if (key in h1) {
      if (h1[key] < h2[key]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(bigString, smallString) {
   // base case
  if (smallString.length === 1) {
    return bigString.indexOf(smallString) === -1 ? "" : smallString;
  }
  if (bigString === smallString) return bigString;
  // hash that tracks the characters in smallString
  const HASH = {};
  for (let char of smallString) {
    if (char in HASH) {
      HASH[char] += 1;
    } else {
      HASH[char] = 1;
    }
  }
  let CHARS = Object.keys(HASH);
  let count = CHARS.length;

  let result = "";
  let found = false;
  let minLength = bigString.length;

  let [i, j] = [0, 0];
  while (j < bigString.length) {
    const char = bigString[j];
    if (CHARS.includes(char)) {
      HASH[char] -= 1;
      if (HASH[char] === 0) {
        count -= 1;
      }
      if (count === 0) {
        // remove unwanted prefixes
        while (count === 0) {
          const iChar = bigString[i];
          if (CHARS.includes(iChar)) {
            HASH[iChar] += 1;
            if (HASH[iChar] > 0) {
              count += 1;
            }
          }
          i += 1;
        }
        const matchedString = bigString.slice(i - 1, j + 1);
        if (matchedString.length <= minLength) {
          result = matchedString;
          minLength = matchedString.length;
          found = true;
        }
      }
    }
    j += 1;
  }
  if (!found) return "";
  return result;
};
