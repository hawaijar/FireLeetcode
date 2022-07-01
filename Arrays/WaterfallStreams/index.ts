class WaterfallStreams {
  solution(array: number[][], source: number) {
    let rowAbove = array[0];
    rowAbove[source] = -1;
    // start doing the evaluation from row1
    for (let i = 1; i < array.length; i++) {
      const currentRow = array[i];
      for (
        let rowAboveIndex = 0;
        rowAboveIndex < rowAbove.length;
        rowAboveIndex++
      ) {
        const rowAboveValue = rowAbove[rowAboveIndex];
        const hasWaterInTheRowAboveIndex = rowAboveValue < 0;
        const hasBlock = currentRow[rowAboveIndex] === 1;
        if (hasWaterInTheRowAboveIndex && !hasBlock) {
          currentRow[rowAboveIndex] += rowAboveValue;
        } else if (hasWaterInTheRowAboveIndex && hasBlock) {
          // Split the water equally on left & right side
          const splitWater = rowAboveValue / 2;

          // split the half on the right
          let rightIndex = rowAboveIndex;
          while (rightIndex + 1 < rowAbove.length) {
            rightIndex += 1;
            // if block
            if (rowAbove[rightIndex] === 1) {
              break;
            }
            if (currentRow[rightIndex] !== 1) {
              currentRow[rightIndex] += splitWater;
              break;
            }
          }
          // split the half on the left
          let leftIndex = rowAboveIndex;
          while (leftIndex - 1 >= 0) {
            leftIndex -= 1;
            // if block
            if (rowAbove[leftIndex] === 1) {
              break;
            }
            if (currentRow[leftIndex] !== 1) {
              currentRow[leftIndex] += splitWater;
              break;
            }
          }
        }
      }

      rowAbove = currentRow;
    }

    return rowAbove.map((x) => (x === 0 ? 0 : x * -100));
  }
}

// testing
const array = [
  [0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0],
];
const source = 3;
const waterfallObj = new WaterfallStreams();
const result = waterfallObj.solution(array, source);
console.log(result);
