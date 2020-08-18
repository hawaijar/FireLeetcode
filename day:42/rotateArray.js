/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const length = nums.length;
    
    
    let count = 0;
    
    while(count < k) {
       let last = nums[length - 1];
       for(let i = length - 1; i > 0; i--) {
            nums[i] = nums[i - 1];
        }
        nums[0] = last; 
        count += 1;
    }
    
};
