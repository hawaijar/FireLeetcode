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

  // Brute/force - using sort operation
  solution1() {
    // base case
    if (this.isEmpty() || this.array.length === 1) return [-1, -1];
    // create a new sorted array
    const newSortedArray = this.array.slice().sort((a, b) => a - b);
    let isSameArray = true;

    let [i, j] = [0, this.array.length - 1];

    while (i < j) {
      if (this.array[i] === newSortedArray[i]) {
        i += 1;
      } else {
        isSameArray = false;
        break;
      }
    }
    while (j > i) {
      if (this.array[j] === newSortedArray[j]) {
        j -= 1;
      } else {
        break;
      }
    }
    if (isSameArray) return [-1, -1];
    return [i, j];
  }
}

// let o = new Program();
// o.setInput([5, 4, 3, 2, 1]);
// console.log(o.solution1());

export default Program;
