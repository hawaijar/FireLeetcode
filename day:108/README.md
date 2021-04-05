## 36. Valid Sudoku
[Leetcode link](https://leetcode.com/problems/valid-sudoku/)

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

**Note:**

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

### Example 1:
![sudoku image](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)

Input: board = 
```
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
```
Output: true

<hr />

### How do I solve this problem?

Simple, for loops!

First, check all the rows and ensure there's no duplicates

```
  for (let i = 0; i < board.length; i++) {
		if (hasDuplicate(board, i, i + 1, 0, board.length)) {
			return false;
		}
	}
```
**hasDuplicate()** definition down below - using an array and check there's no duplicate elements inside it.

Then check all the columns and ensure there's no duplicates
```
for (let i = 0; i < board.length; i++) {
		if (hasDuplicate(board, i, i + 1, 0, board.length)) {
			return false;
		}
	}
```  

Finally, check all the inner 9 boxes/regions -
```
let size = Math.sqrt(board.length);
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			if (
				hasDuplicate(board, i * size, (i + 1) * size,
				j * size,
				(j + 1) * size)
			) {
				return false;
			}
		}
	}
```
Here's the definition of hasDuplicate() -
```
function hasDuplicate(board, startRow, endRow, startCol, endCol) {
	let hash = [];
	for (let i = startRow; i < endRow; i++) {
		for (let j = startCol; j < endCol; j++) {
			if (board[i][j] === ".") continue;
			const digit = board[i][j];
			if (hash.includes(digit)) {
				return true;
			} else {
				hash.push(digit);
			}
		}
	}
	return false;
}
```

Here is the complete [solution](https://github.com/hawaijar/FireLeetcode/blob/master/day:108/isValidSudoku.js)
