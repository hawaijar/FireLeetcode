class Program {
  solution(nums) {
    // base case(s)
    if (nums.length <= 1) return nums;

    // find the first non-decreasing element from the right
    const N = nums.length;
    let j = N - 1;
    while (j > 0) {
      const a = nums[j - 1];
      const b = nums[j];
      if (a < b) {
        // a === nums[j - 1] is the pivot element
        // non-decreasing suffix (NDS) is nums[j:N-1]

        // find the smallest no in the NDS that's greater than the pivot
        let i = N - 1;
        while (i >= j) {
          const k = nums[i];
          if (k > a) {
            // swap j & ith positions
            [nums[j - 1], nums[i]] = [nums[i], nums[j - 1]];
            break;
          } else {
            i -= 1;
          }
        }
        // take first part as nums[0:j] - all elements till the pivot element.
        const part1 = nums.slice(0, j);
        // sort the elements (after the pivot element) - nums[j:N]
        const part2 = nums.slice(j).sort();

        nums.length = 0;
        // can't do: nums = [...part1, ...part2], since the update has to be in place.
        nums.push(...part1, ...part2);
        break;
      } else {
        j -= 1;
      }
    }

    if (j === 0) {
      // the given list is already the highest permutation and there's no next permutation
      nums.sort();
    }
  }
}

// const o = new Program();
// const nums = [1, 3, 2];
// o.solution(nums);
// console.log(nums);

export default Program;
