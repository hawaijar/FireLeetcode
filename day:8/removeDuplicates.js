/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // base case
    if(nums.length <= 1) return nums.length;
    
    let count = 1;
    let j = 1;
    for(let i = 0; i < nums.length - 1; i++) {
        while(j < nums.length) {
            if(nums[i] === nums[j]) {
                j += 1;
            }
            else {
                nums[i+1] = nums[j];
                count += 1;
                j += 1;
                break;
            }
        } 
        
    }
    
    return count;
    
};
