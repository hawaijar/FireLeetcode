(() => {
  function maxSubsetSumNoAdjacent(array: number[]) {
    // base case
    if (array.length === 0) {
      return 0;
    }
    let result = new Array(array.length).fill(0);
    result[0] = array[0];
    result[1] = Math.max(array[0], array[1]);

    for (let i = 2; i < array.length; i++) {
      result[i] = Math.max(result[i - 1], array[i] + result[i - 2]);
    }

    return result[array.length - 1];
  }

  // Testing
  let array = [7, 10, 12, 7, 9, 14];
  console.log(maxSubsetSumNoAdjacent(array));
})();
