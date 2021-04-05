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
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // check all rows
	for (let i = 0; i < board.length; i++) {
		if (hasDuplicate(board, i, i + 1, 0, board.length)) {
			return false;
		}
	}
	// check all columns
	for (let i = 0; i < board.length; i++) {
		if (hasDuplicate(board, 0, board.length, i, i + 1)) {
			return false;
		}
	}
	// check inner boxes
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
	return true;
};
