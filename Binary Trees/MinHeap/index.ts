export class MinHeap {
  private length: number = 0;
  private data: number[] = [];

  private getParentIndex(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }
  private getLeftIndex(idx: number): number {
    return 2 * idx + 1;
  }
  private getRightIndex(idx: number): number {
    return 2 * idx + 2;
  }

  // add operation
  private heapifyUp(idx: number): void {
    if (idx === 0) {
      return;
    }
    const parentIdx = this.getParentIndex(idx);
    const parentValue = this.data[parentIdx];
    const value = this.data[idx];

    if (value < parentValue) {
      // swap the values between child and the parent
      [this.data[idx], this.data[parentIdx]] = [
        this.data[parentIdx],
        this.data[idx],
      ];
      this.heapifyUp(parentIdx);
    }
  }
  // poll/delete operation
  private heapifyDown(idx: number): void {
    if (this.getLeftIndex(idx) >= this.data.length) {
      return;
    }
    const leftIdx = this.getLeftIndex(idx);
    const rightIdx = this.getRightIndex(idx);

    const value = this.data[idx];
    const leftValue = this.data[leftIdx];
    // NOTE: Consider the case when the minHeap has only 2 elements. If we try to heapifyDown from top,
    //        We'll find only *left element*. So, we need to check whether the right element is off the range.
    const rightValue =
      rightIdx >= this.data.length ? Infinity : this.data[rightIdx];
    if (leftValue <= rightValue) {
      if (value > leftValue) {
        // swap parent and left child
        [this.data[idx], this.data[leftIdx]] = [
          this.data[leftIdx],
          this.data[idx],
        ];
        // heapifyDown left
        this.heapifyDown(leftIdx);
      }
    } else {
      if (value > rightValue) {
        // swap parent and right child
        [this.data[idx], this.data[rightIdx]] = [
          this.data[rightIdx],
          this.data[idx],
        ];
        // heapifyDown right
        this.heapifyDown(rightIdx);
      }
    }
  }

  public poll(): number | null {
    // base case
    if (this.data.length === 0) {
      return null;
    }
    if (this.data.length === 1) {
      return this.data.pop()!;
    }
    const minElement = this.data[0];
    this.data[0] = this.data.pop()!;
    this.heapifyDown(0);

    return minElement;
  }
  public buildHeapFromArray(nums: number[]): void {
    for (const number of nums) {
      this.data.push(number);
      this.heapifyUp(this.data.length - 1);
    }
  }
  // for testing purpose
  public clearHeap() {
    this.data = [];
  }
}
