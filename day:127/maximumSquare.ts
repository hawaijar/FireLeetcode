function maximalSquare(matrix: string[][]): number {/**
	 * Idea is that we take the bottom-right of a cell (for those with '1' value) as a reference and
	 * check if the other three sides (top-left, top-center, bottom-left) are > 0 and take the minimum of them.
	 */

	const ROWS = matrix.length;
	const COLS = matrix[0].length;
	let dp: number[][] = new Array(ROWS + 1).fill([]);
	for (let i = 0; i <= ROWS; i++) {
		dp[i] = new Array(COLS + 1).fill(0);
	}
	let maxSquare = 0;
	for (let i = 1; i <= ROWS; i++) {
		for (let j = 1; j <= COLS; j++) {
			if (matrix[i-1][j-1] === '1') {
				dp[i][j] = Math.min(Math.min(dp[i - 1][j - 1], dp[i][j - 1]), dp[i - 1][j]) + 1;
				maxSquare = Math.max(maxSquare, dp[i][j]);
			}
		}
	}

	return maxSquare * maxSquare;

};
