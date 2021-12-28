### Problem statement
Given a string of brackets ((, ), {, }, [, ] ), check whether the brackets in the string is balanced.

#### Sample Input1
	string = "(((([{}]))))"
#### Sample output
	true

#### Sample Input2
	string = "(((([{]}))))"
#### Sample output
	false // '{' & ']' not balanced

### Solution

- Scan each letter from left to right
- If the letter is an open bracket ('(', '{', '['), push to the stack
- If the letter is a close bracket (')', '}', ']'), peek the stack and if it's matching, pop the stack, else return false
- If the letter is not a bracket, ignore it
- Once the iteration is over. Return true if stack is empty else false.

### Complexity
	Time complexity = O(n)
	Space complexity = O(n) // since we create a stack
