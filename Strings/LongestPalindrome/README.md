### Longest palindromic string

Given a non-empty string, find the longest palindromic substring in it. 
A palindrome is a string that reads the same from left and right.

### Example:
```
Input: "noony"
Output: "noon"

### Solution:

- For odd length string like "abc", we start with center "a" and expand left and right till the characters (on opposite side) are equals.
- For even length string like "abba", we have two centers at "b" and "b" and we have to expand from them.
- However, we can't simply apply odd or even scanning just by checking the even/odd of the given string.
- For example, take the case of the string "noony". It's odd length but if we apply the first steps (for odd), we won't get the required palindrome "noon"
- Therefore, we need to apply both even & odd scanning and find the longest palindrome found.
```

### Complexity:

```
Time complexity = O(n²) because in the worse case when there's no palindrome in the string, 
we still have to scan for each cahracter.

Space Complexity = O(1)
```
