function solveNQueens(n = 4) {
	let solutions = [];
	let BOARD = new Array(n).fill([]);
	BOARD.forEach((_, i) => (BOARD[i] = new Array(n).fill(0)));
	let LEFT_DIAGONALS = new Set();
	let RIGHT_DIAGONALS = new Set();
	let VERTICALS = new Set();

	function isQueenSafe(row, col) {
		return (
			!LEFT_DIAGONALS.has(col - row) &&
			!RIGHT_DIAGONALS.has(row + col) &&
			!VERTICALS.has(col)
		);
	}
	function placeQueen(row, col) {
		LEFT_DIAGONALS.add(col - row);
		RIGHT_DIAGONALS.add(row + col);
		VERTICALS.add(col); // this 'col' column is occupied now
		BOARD[row][col] = 1;
	}
	function removeQueen(row, col) {
		LEFT_DIAGONALS.delete(col - row);
		RIGHT_DIAGONALS.delete(row + col);
		VERTICALS.delete(col);
		BOARD[row][col] = 0;
	}
	function addSolution() {
		const temp = [];
		let str;
		for (let i = 0; i < n; i++) {
			str = "";
			for (let j = 0; j < n; j++) {
				if (BOARD[i][j]) {
					str += "Q";
				} else {
					str += ".";
				}
			}
			temp.push(str);
		}
		solutions.push(temp);
	}
	// we passed 'row' here because that'll give all diagonals for a given (row, col)
	// For a given row, we're trying to find the column position that we can place a Queen
	// Once a position, col(x) is occupied, we noted col(x) and its left/right diagonals to check the validity of placing
	// other Queens.
	function findQueenLocation(row) {
		if (row === n) {
			// solution found. Add to solutions[]
			addSolution();
			return;
		}
		for (let col = 0; col < n; col++) {
			if (isQueenSafe(row, col)) {
				placeQueen(row, col);
				findQueenLocation(row + 1); // move to the next row. And again start checking which column could be placed.
				removeQueen(row, col); // remove Queen placed earlier
			}
		}
	}
	findQueenLocation(0); // starts from row '0'
	return solutions;
}
let x = solveNQueens(5);
console.log(x);
