/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let hash = {};
    
    for(let i = 0; i < nums.length; i++) {
        const num = (nums[i]).toString();
        if(hash[num] !== undefined) {
            if(Math.abs(hash[num] - i) <= k) {
                return true;
            }
            hash[num] = i;
        }
        else {
            hash[num] = i;
        }
    }
    return false;
    
};
