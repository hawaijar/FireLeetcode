// classic example of "Sliding Window" Technique
// Please refer to this video explanation: https://www.youtube.com/watch?v=U1q16AFcjKs
(() => {
  function smallestSubstringContaining(bigString: string, smallString: string) {
    // create a hash out of smallString
    const hash: { [key: string]: number } = {};
    for (let char of smallString) {
      hash[char] = (hash[char] || 0) + 1;
    }
    let [left, right] = [0, 0];
    let count = Object.keys(hash).length;

    let result = "";

    while (right < bigString.length) {
      const characterUnderRight = bigString[right++];
      if (characterUnderRight in hash) {
        hash[characterUnderRight] -= 1;
        if (hash[characterUnderRight] === 0) {
          count -= 1;
          if (count === 0) {
            // squeeze the window by moving left pointer
            while (count === 0) {
              const characterUnderLeft = bigString[left++];
              if (characterUnderLeft in hash) {
                hash[characterUnderLeft] += 1;
                if (hash[characterUnderLeft] > 0) {
                  count += 1;
                }
              }
            }
            // found a matching substring
            const subString = bigString.slice(left - 1, right);
            if (result === "" || subString.length < result.length) {
              result = subString;
            }
          }
        }
      }
    }

    return result;
  }

  // const bigString = "abcd$ef$axb$c$";
  // const smallString = "$$abf";
  const bigString = "ADOBECODEBANC";
  const smallString = "ABC";

  const result = smallestSubstringContaining(bigString, smallString);
  console.log(result);
})();
