export function permutationsOfString(str: string): string[] {
  const result: string[] = [];

  function permute(prefix: string = "", string: string) {
    if (prefix.length === str.length) {
      result.push(prefix);
      return;
    }
    for (let i = 0; i < string.length; i++) {
      permute(prefix + string[i], string.slice(0, i) + string.slice(i + 1));
    }
  }

  permute("", str);
  return result;
}
export function permutationsOfNumbers(nums: number[]): number[][] {
  const result: number[][] = [];

  function permute(prefix: number[] = [], remaining: number[]) {
    if (prefix.length === nums.length) {
      result.push(prefix);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      permute(
        [...prefix, remaining[i]],
        [...remaining.slice(0, i), ...remaining.slice(i + 1)]
      );
    }
  }

  permute([], nums);
  return result;
}

// write a function that takes a number and return the next greater permutation containing the same
// digits of the number.
// Note: If the next greater permutation is not possible (e.g. the digits in the number is in descending order
//       return the sorted order of the number.
export function findNextGreaterPermutation(num: number): number {
  const arrayNum = `${num}`.split("");
  // base case
  if (arrayNum.length <= 1) {
    return num;
  }
  let j = arrayNum.length - 1;
  let i = j - 1;
  while (j >= 1) {
    if (arrayNum[i] < arrayNum[j]) {
      break;
    }
    j -= 1;
    i = j - 1;
  }
  if (i < 1) {
    // the number is in descender order --> won't find the next greatest permutation
    // return the sorted order of the number
    return +arrayNum.sort().join("");
  }
  // find the smallest number on the right of jth index that is greater than num[j]
  let k = arrayNum.length - 1;
  while (k > i) {
    if (arrayNum[k] >= arrayNum[i]) {
      break;
    }
    k -= 1;
  }
  // swap the elements at 'ith' and 'kth' positions
  [arrayNum[i], arrayNum[k]] = [arrayNum[k], arrayNum[i]];
  const firstPart = arrayNum.slice(0, i + 1);
  const secondPart = arrayNum.slice(i + 1).sort();

  const result = +[...firstPart, ...secondPart].join("");
  return result;
}
