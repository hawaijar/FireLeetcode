class SpiralTraversal {
  solution(array) {
    // base case
    if (array.length <= 1) return array[0];

    let result = [];
    let [startRow, startCol] = [0, 0];
    let [endRow, endCol] = [array.length - 1, array[0].length - 1];

    while (startRow <= endRow && startCol <= endCol) {
      // Extract the top elements
      let j = startCol;
      while (j <= endCol) {
        result.push(array[startRow][j]);
        j += 1;
      }
      startRow += 1;
      // Extract the right elements
      let i = startRow;
      while (i <= endRow) {
        result.push(array[i][endCol]);
        i += 1;
      }

      endCol -= 1;

      // Extract the bottom elements
      j = endCol;
      while (startRow <= endRow && j >= startCol) {
        result.push(array[endRow][j]);
        j -= 1;
      }
      endRow -= 1;

      // Extract the left elements
      i = endRow;
      while (startCol <= endCol && i >= startRow) {
        result.push(array[i][startCol]);
        i -= 1;
      }
      startCol += 1;
    }
    return result;
  }
}
//
// let o = new SpiralTraversal();
// let array = [
//   [1, 2],
//   [6, 3],
//   [5, 4],
// ];
// console.log(o.Solution(array));

export default SpiralTraversal;
