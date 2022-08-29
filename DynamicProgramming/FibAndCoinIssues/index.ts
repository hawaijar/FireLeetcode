const cache = [0, 1];
export function findNthFib(n: number, cache = [0, 1]) {
  // check if the number is already calculated
  if (n in cache) {
    return cache[n];
  }
  cache[n] = findNthFib(n - 1, cache) + findNthFib(n - 2, cache);

  return cache[n];
}

// Given an amount and list of denominators, check whether we can make the amount from the given
// list of denominators. You can assume that each denominator can be repeated as much as you need to.
export function sumPossible(amount: number, numbers: number[]): boolean {
  if (amount === 0) {
    return true;
  }

  function isPossible(
    total: number,
    cache: { [key: string]: boolean } = {}
  ): boolean {
    // base cases
    if (total === 0) {
      return true;
    }
    if (total in cache) {
      return cache[total];
    }

    for (let number of numbers) {
      if (number <= total) {
        if (isPossible(total - number, cache)) {
          cache[total] = true;
          return true;
        }
      }
    }
    cache[total] = false;
    return false;
  }

  return isPossible(amount);
}

// Given an amount and list of denominators, return the mininum number of coins to make the change from
// list of denominators. You can assume that each denominator can be repeated as much as you need to.
export function minChange(amount: number, coins: number[]): number {
  // base case
  if (amount === 0 || coins.length === 0) {
    return 0;
  }
  function recur(total: number, cache: { [key: number]: number } = {}) {
    if (total === 0) {
      return 0;
    }

    if (total in cache) {
      return cache[total];
    }
    let minimum = Infinity;

    for (let coin of coins) {
      if (coin <= total) {
        const numberOfCoins = 1 + recur(total - coin, cache);
        minimum = Math.min(minimum, numberOfCoins);
      }
    }
    cache[total] = minimum;
    return minimum;
  }
  const result = recur(amount);
  if (result < Infinity) {
    return result;
  }
  return -1;
}
