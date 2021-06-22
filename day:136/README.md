## 1143. Longest Common Subsequence
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the 
relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".


### Idea
- For character matching - matrix[i][j] = matrix[i-1][j-1] + 1
  
- For character not matching - matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1])
  
