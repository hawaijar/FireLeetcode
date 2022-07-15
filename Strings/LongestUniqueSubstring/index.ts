class LongestUniqueSubstring {
  // e.g: input: mayengbamishardworking  o/p:
  solution(string: string) {
    // base case
    if (string.length <= 1) return string;

    // make a hash of unique characters
    const hash: { [key: string]: number } = {};

    let pointer = 0;
    let longest = "";
    let i = 0;
    while (i < string.length) {
      const character = string[i];
      if (hash[character] !== undefined && hash[character] >= pointer) {
        const substring = string.slice(pointer, i);
        if (substring.length > longest.length) {
          longest = substring;
        }
        pointer = hash[character] + 1;
      } else {
        hash[character] = i;
        i += 1;
      }
    }
    // check the substring starting from pointer
    const lastSubstring = string.slice(pointer);
    if (lastSubstring.length > longest.length) {
      longest = lastSubstring;
    }
    return longest;
  }
}

// Testing
(() => {
  const obj = new LongestUniqueSubstring();
  const result = obj.solution("abcdabcef");
  console.log(result);
})();
