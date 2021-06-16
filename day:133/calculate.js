/*
Given a string s which represents an expression, evaluate this expression and return its value.
The integer division should truncate toward zero.
Note: You are not allowed to use any built-in function which evaluates strings as
mathematical expressions, such as eval().

Idea: Push to stack the numbers when you encounter earlier '+' or '-'.
Pop when you encounter earlier '*' or '/'
 */

function calculate(str) {
  // base case
  if (str === "") return 0;
  const OPERATORS = { "+": 1, "-": 1, "*": 1, "/": 1, "": 1 };
  const DIGITS = "0123456789".split("");

  let currentNumber = 0;
  let operator = "+";
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (DIGITS.includes(char)) {
      // currentNumber * 10 for cases where we have string like '3,3,+,2'
      currentNumber = char - "0" + currentNumber * 10;
    }
    if (char in OPERATORS || i === str.length - 1) {
      if (operator === "+") {
        stack.push(currentNumber);
      } else if (operator === "-") {
        stack.push(-currentNumber);
      } else if (operator === "*") {
        stack.push(stack.pop() * currentNumber);
      } else if (operator === "/") {
      	const head = stack.pop();
      	const division = Math.floor(Math.abs(head)/currentNumber);
      	if(head < 0){
      		stack.push(-division);
		}
      	else {
      		stack.push(division);
		}
      }
      if (char !== "") {
        operator = char;
      }
      currentNumber = 0;
    }
  }
  let sum = 0;
  while (stack.length > 0) {
    sum += stack.pop();
  }
  return sum;
}
console.log(calculate("14-3/2"));
