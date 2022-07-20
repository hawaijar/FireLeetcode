### Pattern matching

Given a pattern containing two characters ('x', 'y') and a string, check whether the pattern matches the given string and if it's, return the value of 'x' and 'y'.

### Example:
```
pattern: "xxxyx" string ="bobbobbobmarybob
Output: ["bob", "mary"]
```

### Solution:

- Let firstLetter = pattern[0], amountOfLetterA = 0, amountOfLetterB = 0, indexB = -1
- Iterate the pattern and increment amountOfLetterA and amountOfLetterB based on the condition whether the character equals firstLetter or not.
- if amountOfLetterB === 0, means 'x' or 'y' is missing in the pattern.
    - Find the length of the matched string, M ==> string[0:len(string)/amountOfLetterA]
    - Check whether M * amountOfLetterA === string
    - if the above condition is true, if firstLetter is 'x', return [M,""] else, ["",M]

- Else:
    - Check all possible substrings (with length 1, 2, 3, ... string.length) and calculate A (probable value of 'x' in the string)
    and B (probable value of 'y' in the string) using amountOfLetterA, amountOfLetterB, indexB variables.
    - If A and B using amountOfLetterA and amountOfLetterB match with the given string,
        - if firstLetter == 'x', return [A, B]
        - if firstLetter == 'y' return [B, A]
```

### Complexity:

```
Time complexity = O(n)
Space Complexity = O(n)
```
