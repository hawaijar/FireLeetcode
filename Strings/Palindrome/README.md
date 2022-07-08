### Is Palindrome?

Given a non-empty string, check if it is a palindrome. A palindrome is a string that reads the same from left and right.

### Example:
```
Input: "ana"
Output: true

### Solution:

- Take two pointers, [left = 0, right = length(string) - 1] to each end of the string
- Compare character under each pointer. If they're not equal, return true
- Continue step 2 by incrementing the left pointer and decrementing the right pointer
- When the left pointer <= right pointer, return true
```

### Complexity:

```
Time complexity = O(n)
Space Complexity = O(1)
```
