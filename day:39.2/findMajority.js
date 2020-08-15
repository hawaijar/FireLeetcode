/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hash ={}
    const limit = Math.floor(nums.length/2);
    let result, max = 0;
    for(let num of nums) {
        if(hash[num]) {
            hash[num] += 1;
        }
        else {
            hash[num] = 1;
        }
        if(hash[num] > max) {
                result = num;
                max = hash[num];
        }
    }
    
    return result;
};
