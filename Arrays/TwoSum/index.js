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
}
// let o = new Program();
// o.setInput([1, -21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163);
// console.log(o.solution1());

export default Program;
