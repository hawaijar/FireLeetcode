/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let other = target - current;
    if (other in hash) {
      return [hash[other], i];
    } else {
      hash[nums[i]] = i;
    }
  }
};
