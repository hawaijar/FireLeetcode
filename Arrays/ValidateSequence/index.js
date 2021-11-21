class Program {
  constructor(array = [], sequence = []) {
    this.array = array;
    this.sequence = sequence;
  }
  setInput(array = [], sequence = []) {
    this.array = array;
    this.sequence = sequence;
  }
  // Time-complexity = O(n) & Space-complexity = O(1)
  solution() {
    // base case
    if (this.sequence.length > this.array.length) return false;
    if (this.array.length === 0) {
      return this.sequence.length === 0;
    }
    let firstIndex = 0;
    let secondIndex = 0;
    let currentlyCheckCharacter = this.sequence[secondIndex];
    while (firstIndex < this.array.length) {
      if (this.array[firstIndex] === currentlyCheckCharacter) {
        firstIndex += 1;
        secondIndex += 1;
        if (secondIndex === this.sequence.length) return true;
        currentlyCheckCharacter = this.sequence[secondIndex];
      } else {
        firstIndex += 1;
      }
    }
    return false;
  }
}
// let o = new Program();
// o.setInput([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);
// console.log(o.solution());

export default Program;
