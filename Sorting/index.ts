function swap(array: number[], i: number, j: number) {
  [array[i], array[j]] = [array[j], array[i]];
}
// One way of doing partition (left to right scanning)
function partition1(array: number[], low: number, high: number): number {
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

// Both sides scanning
function partition(array: number[], low: number, high: number): number {
  let [i, j] = [low - 1, high];
  const pivotIndex = 0;
  const pivot = array[pivotIndex];

  while (i < j) {
    // Move i till it finds an element > pivot
    do {
      i += 1;
    } while (array[i] <= pivot);
    // Move j till it finds an element < pivot
    do {
      j -= 1;
    } while (array[j] > pivot);

    // swap elements at 'i' and 'j' positions.
    swap(array, i, j);
  }
  // finally swap the pivot and the element[j]
  swap(array, pivotIndex, j);

  return j;
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

function merge(array: number[], low: number, mid: number, high: number) {
  let sortedArray: number[] = [];
  let [i, j, k] = [low, mid + 1, low];
  while (i <= mid && j <= high) {
    if (array[i] <= array[j]) {
      sortedArray[k++] = array[i++];
    } else {
      sortedArray[k++] = array[j++];
    }
  }
  // copy any remaining elements in either array1 or array2
  while (i <= mid) {
    sortedArray[k++] = array[i++];
  }
  while (j <= high) {
    sortedArray[k++] = array[j++];
  }
  // finally copy all elements of sortedArray to the original array
  for (let i = low; i <= high; i++) {
    array[i] = sortedArray[i];
  }
}

export function mergeSort(array: number[]) {
  mSort(array, 0, array.length - 1);
  function mSort(array: number[], low: number, high: number) {
    if (low < high) {
      const middle = Math.floor((low + high) / 2);
      mSort(array, low, middle);
      mSort(array, middle + 1, high);

      merge(array, low, middle, high);
    }
  }
}
