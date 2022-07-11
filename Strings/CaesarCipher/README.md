### Caesar Cipher Encoding

Given a non-empty string, and a non-negative integer, rotate the string on the basis of the key and return the new string.
### Example:
```
Input:  string = "abc" key = 2
Output: "cde"

### Solution:

- Create two auxiliary hash structures - ASCII_TO_LETTER and LETTER_TO_ASCII
- For each letter of the given string, convert it into ascii, add the key value and take the modulo of 26.
- Then use the ASCII_TO_LETTER to get the corresponding letter.
- Keep on doing step 2and 3, till we complete all letters of the string.
```

### Complexity:

```
Time complexity = O(n)
Space Complexity = O(n)
```
