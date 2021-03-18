/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // base case
    if(nums.every(x => x === 0)) return nums;
    
    let i = 0;
    
    while(i < nums.length) {
        if(nums[i] === 0) {
            let t = i + 1;
            // find the next non-zero number
            while(nums[t] === 0 && t < nums.length) {
                t += 1;
            }
            // break the loop if no zeroes found after num[i]
            if(t === nums.length) break;
            // swap current item (num[i]) and the non/zero item
            [nums[i], nums[t]] = [nums[t], nums[i]];
        }
        i += 1;
    }
    
    return nums;
};
