### Longest unique substring (Non duplicate characters)

Given a non-empty string, find the longest substring of unique characters
### Example:
```
Input: "abcdabcef"
Output: "dabcef"

### Solution:

- Make a hash and capture characters to their index positions
- Make a pointer, p that's initially pointing to the first character
- Iterate each character, x of the string and check if the character, x is in the hash and hash[x] >= pointer
    - If x is in the hash, take the substring from pointer to hash[x] and update the current longest substring
    - Update pointer to hash[x] + 1  
    
- return the longest substring found.
```

#### Points to be noted
- When there is a duplicate character found, we also need to check if the index position
  (of the matched character) is **within the current frame** starting with the pointer, p.
- i.e. we don't need to check character from the previous frames.

Example:
Say, we're checking on the string - "abcdeba"
and say the pointer,p is in 3rd index (character='c') and your current iteration is 5th index (character = 'b').
In this case, though 'b' should have been already in the hash, we keep iterating it because the matched character 'b' at index 2 is less than pointer,p.
Hope this is clear.


### Complexity:

```
Time complexity = O(n)
Space Complexity = O(n) // we create a hash structure
```
