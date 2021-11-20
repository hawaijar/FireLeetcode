class Program {
  constructor(array = [], targetSum = 0) {
    this.array = array;
    this.c = targetSum;
  }
  setInput(array = [], targetSum = 0) {
    this.array = array;
    this.c = targetSum;
  }
  // brute-force method
  // c = a + b
  // c is the targetSum and we've to find the (first) a & b
  // Time-complexity = O(n²) & Space-complexity = O(1)
  solution1() {
    // base case
    if (this.array.length === 0) return [];
    for (let i = 0; i < this.array.length; i++) {
      const a = this.array[i];
      for (let j = i + 1; j < this.array.length; j++) {
        const b = this.array[j];
        const diff = this.c - a;
        if (b === diff) return [a, b];
      }
    }
    return [];
  }
  // Using hash (extra memory) to improve performance (Time-Complexity = O(n))
  solution2() {
    // base case
    if (this.array.length === 0) return [];
    let hash = {};
    for (let i = 0; i < this.array.length; i++) {
      let b = this.array[i];
      if (b in hash) {
        const a = hash[b];
        return [a, b];
      }
      const a = b;
      b = this.c - a;
      hash[b] = a;
    }
    return [];
  }
  // using 2 pointers to improve the space complexity (discard using hash structure)
  solution3() {
    // base case
    if (this.array.length === 0) return [];
    // sort the array
    this.array = this.array.sort((a, b) => a - b);
    let [i, j] = [0, this.array.length - 1];
    while (i < j) {
      const a = this.array[i];
      const b = this.array[j];
      if (a + b === this.c) return [a, b];
      if (a + b > this.c) {
        j -= 1;
      } else {
        i += 1;
      }
    }
    return [];
  }
}

// let o = new Program();
// o.setInput([3, 5, -4, 8, 11, 1, -1, 6, 1], 10);
// console.log(o.solution3());

export default Program;
