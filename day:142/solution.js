// point 1: Create a hash to capture the characteristics of the 'smallString' - what are the chars and count of its char
// Use two pointers (left & right - initially pointing to the start of 'bigString' ) and start scanning from left to right

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
function smallestSubstringContaining(bigString, smallString) {
  const hashSmallString = {};
  for (let char of smallString) {
    if (char in hashSmallString) {
      hashSmallString[char] += 1;
    } else {
      hashSmallString[char] = 1;
    }
  }
  const LEFT_BOUNDARY =
    bigString.length === smallString.length
      ? bigString.length
      : bigString.length - smallString.length;
  let [left, right] = [0, 0];
  // left should always point to a char that's in smallString
  while (
    hashSmallString[bigString[left] === undefined] &&
    left < LEFT_BOUNDARY
  ) {
    left += 1;
  }
  if (left === LEFT_BOUNDARY) return "";
  right = left;
  // Let's expand by moving the right pointer
  const hashBiggerString = {};
  let result = "";
  while (right < bigString.length) {
    let char = bigString[right];
    if (char in hashSmallString) {
      if (char in hashBiggerString) {
        hashBiggerString[char] += 1;
      } else {
        hashBiggerString[char] = 1;
      }
      if (hashesMatching(hashBiggerString, hashSmallString)) {
        let matchedString = bigString.slice(left, right + 1);
        if (result === "" || matchedString.length < result.length) {
          result = matchedString;
        }
        // start contracting the window by moving left to the right
        // left will move till the updated window contains the 'smallString'
        while (left < right) {
          // remove the current character pointing by left
          let currentLeftChar = bigString[left];
          if (currentLeftChar in hashBiggerString) {
            hashBiggerString[currentLeftChar] -= 1;
          }
          left += 1;
          if (hashesMatching(hashBiggerString, hashSmallString)) {
            matchedString = bigString.slice(left, right + 1);
            if (result === "" || matchedString.length < result.length) {
              result = matchedString;
            }
          } else {
            break;
          }
        }
      }
    }
    right += 1;
  }

  while (left < LEFT_BOUNDARY) {
    // contract the window and see if there's any better alternative than 'result'
    if (hashesMatching(hashBiggerString, hashSmallString)) {
      let matchedString = bigString.slice(left, right + 1);
      if (result === "" || matchedString.length < result.length) {
        result = matchedString;
      }
      // remove the current character pointing by left
      let currentLeftChar = bigString[left];
      if (currentLeftChar in hashBiggerString) {
        hashBiggerString[currentLeftChar] -= 1;
      }
      left += 1;
    } else {
      left += 1;
    }
  }
  return result;
}

const bigString = "a";
const smallerString = "a";

console.log(smallestSubstringContaining(bigString, smallerString));
