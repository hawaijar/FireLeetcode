class GenerateParentheses {
  solution(n) {
    // base case
    if (n === 0) return [];
    if (n === 1) return ["()"];
    const result = [];
    function recur(prefix = "", left = 0, right = 0) {
      if (prefix.length === 2 * n) {
        result.push(prefix);
      } else {
        if (left < n) {
          recur(prefix + "(", left + 1, right);
        }
        if (right < left) {
          recur(prefix + ")", left, right + 1);
        }
      }
    }
    recur();
    return result;
  }
}

export default GenerateParentheses;
