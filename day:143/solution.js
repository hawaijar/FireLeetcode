//https://leetcode.com/problems/longest-substring-without-repeating-characters/#
// 3. Longest Substring Without Repeating Characters
// E.g. 'pwwkew' ==> 'wke'

function lengthOfLongestSubstring(s) {
  // base case
  if (!s || typeof s !== "string" || s.length === 0) return 0;
  let [i, j] = [0, 0];
  let maxLength = 0;
  let set = new Set();
  while (j < s.length) {
    if (set.has(s[j])) {
      const char = s[j];
      while (set.has(char)) {
        set.delete(s[i]);
        i += 1;
      }
    }
    set.add(s[j]);
    maxLength = Math.max(maxLength, j - i + 1);
    j += 1;
  }
  return maxLength;
}

const str = "dvdf";

console.log(lengthOfLongestSubstring(str));
