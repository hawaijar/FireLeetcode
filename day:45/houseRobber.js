/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // Max Amount (nth house) = max(Amount at nth house + Max Amount(n -2), 
    // Max Amount(n - 1))
    // base case
    if(nums.length === 0) return 0;
    
    let hr = [];
    
    for(let i = 0; i < nums.length; i++) {
        hr[i] = Math.max((hr[i - 2] || 0) + nums[i], (hr[i - 1] || 0));
    }
    return Math.max(...hr)
    
};
