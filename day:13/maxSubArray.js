/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // base cases
    if(nums.every(x => x > 0)) return nums.reduce((acc, e) => acc + e, 0);
    if(nums.every(x => x < 0)) return nums.reduce((acc, e) => Math.max(acc, e), nums[0]);
    
    let sumSoFar = -Infinity;
    let sumUpToIndex = 0;
    
    for(let num of nums) {
        sumUpToIndex += num;
        sumUpToIndex = Math.max(sumUpToIndex, 0);
        sumSoFar = Math.max(sumSoFar, sumUpToIndex)
    }
    return sumSoFar;
    
};
