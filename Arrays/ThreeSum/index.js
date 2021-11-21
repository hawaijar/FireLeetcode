class Program {
  constructor(array = [], targetSum = 0) {
    this.array = array;
    this.targetSum = targetSum;
  }
  setInput(array = [], targetSum = 0) {
    this.array = array;
    this.targetSum = targetSum;
  }
  isEmpty() {
    return this.array.length === 0;
  }
  sort() {
    return this.array.sort((a, b) => a - b);
  }
  // using 2 pointers
  solution2() {
    // base case
    if (this.isEmpty()) return [];
    // sort the array
    this.array = this.sort();
    for (let i = 0; i < this.array.length - 2; i++) {
      const a = this.array[i];
      let j = i + 1;
      let k = this.array.length - 1;
      while (j < k) {
        const b = this.array[j];
        const c = this.array[k];
        const sum = a + b + c;
        if (sum === this.targetSum) return [a, b, c];
        if (sum < this.targetSum) {
          j += 1;
        } else {
          k -= 1;
        }
      }
    }
    return [];
  }
  // using 2 pointers (ignore duplicates)
  solution3() {
    // base case
    if (this.isEmpty()) return [];
    // sort the array
    this.array = this.sort();
    for (let i = 0; i < this.array.length - 2; i++) {
      // remove duplicate a's
      if (i === 0 || this.array[i - 1] !== this.array[i]) {
        const a = this.array[i];
        let j = i + 1;
        let k = this.array.length - 1;
        while (j < k) {
          const b = this.array[j];
          const c = this.array[k];
          const sum = a + b + c;
          if (sum === this.targetSum) return [a, b, c];
          if (sum < this.targetSum) {
            // remove duplicate b's
            while (this.array[j] === this.array[j + 1] && j < k) {
              j += 1;
            }
            j += 1;
          } else {
            // remove duplicate c's
            while (this.array[k] === this.array[k - 1] && j < k) {
              k -= 1;
            }
            k -= 1;
          }
        }
      }
    }
    return [];
  }
}

// let o = new Program();
// o.setInput([12, 3, 4, 1, 6, 9], 24);
// console.log(o.solution3());

export default Program;
