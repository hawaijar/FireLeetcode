class Program {
  solution(heights) {
    // base case
    if (heights.length <= 1) return 0;
    if (heights.length === 2) return Math.min(...heights);

    let [left, right] = [0, heights.length - 1];
    let largestArea = 0;

    while (left < right) {
      const width = right - left;
      const leftHeight = heights[left];
      const rightHeight = heights[right];
      const height = Math.min(leftHeight, rightHeight);
      const area = width * height;
      largestArea = Math.max(largestArea, area);
      if (leftHeight <= rightHeight) {
        left += 1;
      } else {
        right -= 1;
      }
    }
    return largestArea;
  }
}

// const obj = new Program();
// const heights = [1, 3, 2, 5, 25, 24, 5];
//
// console.log(obj.solution(heights));

export default Program;
