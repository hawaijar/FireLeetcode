/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // base case
    if(nums.length === 0) return [-1,-1];
    if(nums.length === 1) {
        if(nums[0] === target) return [0, 0]
    }
    
    let [left, right] = [0, nums.length - 1];
    while(left <= right) {
        let mid = Math.floor((left + right) /2);
        let result = [];
        if(nums[mid] === target) {
            console.log(mid);
            // check if the target is also there on the left & right
            let previous = mid;
            while(previous >= 0 && nums[previous] === target ) {
                previous -= 1;
            }
            if(previous !== mid) {
                result.push(previous + 1);
            }
            else {
                result.push(mid);
            }
            let next = mid;
            while(next <= nums.length && nums[next] === target ) {
                next += 1;
            }
            if(next !== mid) {
                result.push(next - 1);
            }
            else {
                result.push(mid);
            }
            return result;
        }
        else {
            if(target < nums[mid]) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
    }
    return [-1, -1];
    
};
