function swap(array: number[], i: number, j: number) {
  [array[i], array[j]] = [array[j], array[i]];
}
function partition(array: number[], low: number, high: number): number {
  let index = low - 1; // always points to the last element <= pivot
  const pivotIndex = high;
  const pivot = array[pivotIndex];
  for (let i = low; i < high; i++) {
    if (array[i] <= pivot) {
      index += 1;
      swap(array, index, i);
    }
  }

  // swap index, pivot
  index += 1;
  swap(array, index, pivotIndex);

  return index;
}

function qs(array: number[], low: number, high: number) {
  // base case
  if (low >= high) {
    return;
  }
  const partitionIndex = partition(array, low, high);
  qs(array, low, partitionIndex - 1);
  qs(array, partitionIndex + 1, high);
}

export function quickSort(array: number[]) {
  qs(array, 0, array.length - 1);
}

// const a = [15, 4, 3, 2, 1, 10, 0, -1];
// console.log("Before sorting:", a);
// qSort(a);
//
// console.log("After sorting:", a);
