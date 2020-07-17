/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const arrLength = nums.length;
    // base case
    if(arrLength === 0) return 0;
    if(target < nums[0]) return 0;
    if(arrLength === 1){
        if(target <= nums[0]) return 0;
        return 1;
    }
    if(target > nums[arrLength - 1]) return arrLength;
    
    // start binary search
    let [low, high] = [0, arrLength - 1];
    let middle;
    
    while(low <= high) {
        middle = Math.floor((low + high)/2);
        if(nums[middle] === target) {
            return middle;
        }
        else if(target < nums[middle]) {
            high = middle - 1;
        }
        else if(target > nums[middle]) {
            low = middle + 1;
        }
    }
    // target is not there in the array
    if(target > nums[middle]){
        return middle + 1;
    }
    else {
        return middle;
    }
};
