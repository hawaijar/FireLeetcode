const HASH = {
  "(": ")",
  "{": "}",
  "[": "]",
};

class BracketsMatching {
  solution(string) {
    // base case(s)
    if (string.length === 0) return true;
    if (string.length === 1) return false;

    let stack = [];

    const peek = () => {
      return stack[stack.length - 1];
    };
    const pop = () => (stack.length = stack.length - 1);
    const push = (e) => stack.push(e);
    const isEmpty = () => stack.length === 0;

    for (let bracket of string) {
      if (Object.keys(HASH).includes(bracket)) {
        push(bracket);
      } else if (Object.values(HASH).includes(bracket)) {
        if (isEmpty()) return false;
        const leftBracket = Object.values(HASH).indexOf(bracket);
        if (peek() !== Object.keys(HASH)[leftBracket]) return false;
        pop();
      } else {
        // ignore it
      }
    }
    return isEmpty();
  }
}

// const string = "asas(((abcd)))asas";
// const o = new BracketsMatching();
// console.log(o.solution(string));

export default BracketsMatching;
