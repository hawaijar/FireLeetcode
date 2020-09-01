/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hash = {};
    for(const num of nums) {
        if(hash[num]) {
            return true;
        }
        hash[num] = true;
    }
    return false;
};
