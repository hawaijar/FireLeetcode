/*
Given two strings text1 and text2, return the length of their longest common subsequence.
If there is no common subsequence, return 0.
Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.

Idea:
	a) For character matching - matrix[i][j] = matrix[i-1][j-1] + 1
	b) For character not matching - matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1])

 */

function longestCommonSubsequence(text1, text2) {
  // base case
  if (text1 === "" || text2 === "") return 0;
  const ROW = text1.length;
  const COL = text2.length;

  const matrix = new Array(ROW + 1).fill([]);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(COL + 1).fill(0);
  }

  for (let row = 1; row <= ROW; row++) {
    for (let col = 1; col <= COL; col++) {
      if (text1[row - 1] === text2[col - 1]) {
        matrix[row][col] = matrix[row - 1][col - 1] + 1;
      } else {
        matrix[row][col] = Math.max(matrix[row - 1][col], matrix[row][col - 1]);
      }
    }
  }
  return matrix[ROW][COL];
}

const t1 = "abcdeef";
const t2 = "cef";

console.log(longestCommonSubsequence(t1, t2));
