function spiralOrder(matrix) {
  // base case
  if (!matrix || matrix.length === 0) return [];

  let result = [];

  let [startRow, endRow] = [0, matrix.length - 1];
  let [startCol, endCol] = [0, matrix[0].length - 1];

  let SIZE = matrix.length * matrix[0].length;

  while (result.length < SIZE) {
    // Add the top list
    for (let i = startCol; i <= endCol && result.length < SIZE; i++) {
      result.push(matrix[startRow][i]);
    }
    startRow += 1;
    // Add the right list
    for (let i = startRow; i <= endRow && result.length < SIZE; i++) {
      result.push(matrix[i][endCol]);
    }
    endCol -= 1;
    // Add the bottom list
    for (let i = endCol; i >= startCol && result.length < SIZE; i--) {
      result.push(matrix[endRow][i]);
    }
    endRow -= 1;
    // Add the left list
    for (let i = endRow; i >= startRow && result.length < SIZE; i--) {
      result.push(matrix[i][startCol]);
    }
    startCol += 1;
  }
  return result;
}
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(spiralOrder(matrix));
