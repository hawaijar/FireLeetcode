## 227. Basic Calculator II

Given a string s which represents an expression, evaluate this expression and return its value. 

The integer division should truncate toward zero.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

### Example 1:

```
Input: s = "3+2*2"
Output: 7
```

### Basic idea
- We need to keep on tracking current 'digit' and current 'operator'
- Initialize current 'digit' as 0
- Initialize current 'operator' as '+'
- Parse each character.
- If current current character is digit, push it to stack.
- If current character is operator, update current operator.
- If current character is empty string/space, continue the loop
- If current operator is '-' then push -(current digit) to stack
- If current operator is '*', pop the stack and multiply its value by current digit. Push the result to stack
- If current operator is '/', check whether the current digit is negative.  ===> !!! important step !!!

    a. Pop the stack = x and take Math.floor(Math.abs(x)/ current digit) = y
    
    b. if x < 0, push(-y) else, push (y)
- Sum all digits in stack and return.
