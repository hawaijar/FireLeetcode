/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    // base case
    if(nums.length === 0) return [];
    if(nums.length === 1) return [`${nums[0]}`]
    
    let result = [];
    let left = null;

    for(let i = 0; i < nums.length; i++) {
        if(i === nums.length - 1) {
            if(left === null) {
                result.push(`${nums[i]}`)
            }
            else {
                result.push(`${left}->${nums[i]}`);
            }
            break;
        }
        if(nums[i] + 1 === nums[i+1] ) {
            if(left === null) {
                left = nums[i];
            }
        }
        else {
            if(left === null) {
                result.push(`${nums[i]}`)
            }
            else {
                result.push(`${left}->${nums[i]}`);
                left = null;
            }
        }
    }
    return result;
};
