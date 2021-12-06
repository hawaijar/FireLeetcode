class ZigZagTraversal {
  zigzagTraverse(array) {
    // base case(s)
    if (array.length === 0) return array;
    // create diagonals arrays
    const ROWS = array.length;
    const COLS = array[0].length;
    let diagonals = [];

    for (let i = 0; i < ROWS + COLS - 1; i++) {
      diagonals[i] = [];
    }

    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        const sum = i + j;
        if (sum % 2 === 0) {
          diagonals[sum].push(array[i][j]);
        } else {
          diagonals[sum].unshift(array[i][j]);
        }
      }
    }
    const result = [];
    for (let diagonal of diagonals) {
      for (let num of diagonal) {
        result.push(num);
      }
    }
    return result;
  }
}

// let o = new ZigZagTraversal();
// let array = [
//   [1, 3, 4, 10],
//   [2, 5, 9, 11],
//   [6, 8, 12, 15],
//   [7, 13, 14, 16],
// ];
// console.log(o.zigzagTraverse(array));

export default ZigZagTraversal;
