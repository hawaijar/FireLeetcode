(() => {
  function kadaneAlgorithm(array: number[]) {
    // base case
    if (array.length === 0) {
      return 0;
    }
    if (array.length <= 1) {
      return array[0];
    }
    let largestSum = -Infinity;
    let previousMaxSum = 0;
    for (let number of array) {
      previousMaxSum = previousMaxSum + number;
      if (previousMaxSum < 0) {
        // case: for all negative numbers scenario
        largestSum = Math.max(largestSum, previousMaxSum);
        // exclude the number and start again
        previousMaxSum = 0;
      } else {
        largestSum = Math.max(largestSum, previousMaxSum);
      }
    }
    return largestSum;
  }

  // Testing
  const array = [1, -3, 3];
  console.log(kadaneAlgorithm(array));
})();
