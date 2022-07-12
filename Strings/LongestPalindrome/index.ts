function getPalindrome(string: string, start: number, end: number) {
  let [i, j] = [start, end];

  while (i >= 0 && j < string.length && string[i] === string[j]) {
    i -= 1;
    j += 1;
  }
  return string.slice(i + 1, j);
}

class LongestPalindrome {
  solution(string: string) {
    // base case
    if (string.length <= 1) return string;
    let longest = "";
    for (let i = 0; i < string.length; i++) {
      const palindromeWhenEvenLength = getPalindrome(string, i, i);
      if (palindromeWhenEvenLength.length > longest.length) {
        longest = palindromeWhenEvenLength;
      }
      const palindromeWhenOddLength = getPalindrome(string, i, i + 1);
      if (palindromeWhenOddLength.length > longest.length) {
        longest = palindromeWhenOddLength;
      }
    }
    return longest;
  }
}

// Testing
const str = "noony";
const oo = new LongestPalindrome();
const r = oo.solution(str);
console.log(r); // should equals "noon"
