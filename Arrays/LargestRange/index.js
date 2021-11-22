class Program {
  constructor(array = []) {
    this.array = array;
  }
  setInput(array = []) {
    this.array = array;
  }
  isEmpty() {
    return this.array.length === 0;
  }
  sort() {
    return this.array.sort((a, b) => a - b);
  }
  removeDuplicate() {
    const hash = {};
    const newArray = [];
    for (let num of this.array) {
      if (!(num in hash)) {
        hash[num] = true;
        newArray.push(num);
      }
    }
    return newArray;
  }
  // Brute force: Sort the array and check the largest range
  solution1() {
    // base case
    if (this.isEmpty()) return [];
    if (this.array.length === 1) return [this.array[0], this.array[0]];

    // sort the array
    this.array = this.sort();
    // remove any duplicates
    this.array = this.removeDuplicate();
    let largestRange = -Infinity;
    let result = [0, 0];
    let startIndex = 0;
    let endIndex = 1;
    let previousIndex = startIndex;
    while (endIndex < this.array.length) {
      const current = this.array[previousIndex];
      const next = this.array[endIndex];
      if (next === current || next === current + 1) {
        const range = endIndex - startIndex;
        if (range > largestRange) {
          largestRange = range;
          result[0] = this.array[startIndex];
          result[1] = this.array[endIndex];
        }
        previousIndex = endIndex;
        endIndex += 1;
      } else {
        startIndex = endIndex;
        previousIndex = startIndex;
        endIndex += 1;
      }
    }
    return result;
  }
}

// let o = new Program();
// o.setInput([1, 1, 1, 3, 4]);
// console.log(o.solution1());

export default Program;
