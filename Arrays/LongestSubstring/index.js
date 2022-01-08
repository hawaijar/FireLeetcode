class Program {
  solution(string) {
    // base case
    if (string.length <= 1) return string.length;

    let hash = {};
    let [left, right] = [0, 0];
    let result = "";
    while (right < string.length) {
      const char = string[right];
      if (char in hash && hash[char] >= left) {
        const temp = string.slice(left, right);
        if (temp.length > result.length) {
          result = temp;
        }
        left = hash[char] + 1;
        hash[char] = right;
      } else {
        hash[char] = right;
      }
      right += 1;
    }
    const temp = string.slice(left);
    if (temp.length > result.length) {
      result = temp;
    }
    return result;
  }
}

const o = new Program();
const s = "abba";

console.log(o.solution(s));
