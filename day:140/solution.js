// Reference: https://www.youtube.com/watch?v=kT_VabdscHk
function countOfBinarySearchTree(n) {
  let arr = new Array(n + 1).fill(0);
  [arr[0], arr[1]] = [1, 1];

  for (let i = 2; i <= n; i++) {
    arr[i] = 0;
    for (let j = 0; j < i; j++) {
      arr[i] += arr[j] * arr[i - j - 1];
    }
  }
  return arr[n];
}

console.log(countOfBinarySearchTree(5));
