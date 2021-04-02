/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    // base case
    if(nums.length <= 1) return nums;
    
    // find any decreasing suffix if available
    let lastOffset = Infinity;
    for(let i = nums.length - 1; i > 0; i--) {
        if(nums[i] > nums[i - 1]) {
            lastOffset = i - 1;
            break;
        }
    }
    
    if(lastOffset !== Infinity) {
        // found decreasing suffix nums.slice(lastOffset + 1);
        let firstPart = nums.slice(0, lastOffset);
        let decreasingSuffixPart = nums.slice(lastOffset + 1);
        // sort the decreasingSuffixPart
        decreasingSuffixPart.sort((a,b) => a - b);
        // find smallest number from nums.slice(lastOffset + 1) that's greater than nums[lastOffset]
        for(let i = 0; i < decreasingSuffixPart.length; i++) {
            if(decreasingSuffixPart[i] > nums[lastOffset]) {
                [nums[lastOffset],decreasingSuffixPart[i] ] = [decreasingSuffixPart[i],nums[lastOffset] ];
                break;
            }
        }
        // build the array now!
        const temp = nums[lastOffset];
        nums.length = 0;
        nums.push(...firstPart,temp,...decreasingSuffixPart)
        
    }
    else {
        // found no decreasing suffix
        // return sorted array
        nums.sort((a,b) => a - b);
    }
    
};
