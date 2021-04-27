function rotate(matrix= []) {
	const n = matrix[0].length;
	for(let layer = 0; layer < Math.floor(n/2); layer++) {
		for(let i = layer; i < n - layer - 1; i++ ) {
			let temp = matrix[layer][i];
			matrix[layer][i] = matrix[n-i-1][layer];
			matrix[n-i-1][layer] = matrix[n-1-layer][n-i-1];
			matrix[n-1-layer][n-i-1] = matrix[i][n-1-layer];
			matrix[i][n-1-layer] = temp;
		}
	}
}
