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
  solution2() {
    /*
			step1: First, scan (from left) each element and find the elements that are out of order.
			step2: Second, find the smallest (A) from them and largest (B) from them.
			step3: Third, find the right positions, i & j from the Array
			step4: Return [i, j]
		 */
    // case 1: [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19] --> [3, 9]
    // case 2: [1, 2, 3 ,4 5, -1] --> [0, 5]

    // base case(s)
    if (this.isEmpty() || this.array.length < 2) return [-1, -1];
    let unsorted = [];

    // step 1
    for (let i = 0; i < this.array.length; i++) {
      const current = this.array[i];
      if (i === 0) {
        if (current > this.array[i + 1]) {
          unsorted.push(current);
        }
      } else if (i === this.array.length - 1) {
        if (current < this.array[i - 1]) {
          unsorted.push(current);
        }
      } else {
        const previous = this.array[i - 1];
        const next = this.array[i + 1];
        if (current < previous || current > next) {
          unsorted.push(current);
        }
      }
    }

    // step2
    let smallest = Infinity;
    let largest = -Infinity;

    for (let num of unsorted) {
      smallest = Math.min(smallest, num);
      largest = Math.max(largest, num);
    }

    const result = [-1, -1];
    // step3
    for (let i = 0; i < this.array.length; i++) {
      const current = this.array[i];
      if (smallest < current) {
        result[0] = i;
        break;
      }
    }
    for (let i = this.array.length - 1; i >= 0; i--) {
      const current = this.array[i];
      if (largest > current) {
        result[1] = i;
        break;
      }
    }

    return result;
  }
}

// let o = new Program();
// o.setInput([5, 4, 3, 2, 1]);
// o.setInput([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]);
// o.setInput([1, 2, 3, 4, 5, -1]);
// o.setInput([1, 2, 4, 7, 10, 11, 7, 12, 7, 7, 16, 18, 19]);
// console.log(o.solution2());

export default Program;
