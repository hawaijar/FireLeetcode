### Group Anagrams

Given a list of strings, return list of grouped anagrams. Anagrams are words containing the same number of letters and their occurences.
For example, "cinema" and "iceman" are anagrams. Same with "maa" and "ama"

### Example:
```
Input: ["abc", "acb", "cinema", "iceman", "boo"]
Output: [["abc", "acb"], ["cinema", "iceman"], ["boo"]]

### Solution:

- Create a hash table where the key is the sorted form of each word and the value is the array of 
all those words that has that sorted form.
- Basically we are grouping anagrams based on their sorted form
- Return all the grouped anagrams.
```

### Complexity:

```
Time complexity = O(n)
Space Complexity = O(n) for the auxiliary hash structure.
```
