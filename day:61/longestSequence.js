/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // base case
    if(nums.length === 0) return 0;
    let longest = 1;
    
    for(let num of nums) {
        if(!nums.includes(num - 1)) {
            let current = num;
        let count = 1;
        while(nums.includes(current + 1)) {
            count += 1;
            current += 1;
            longest = Math.max(longest, count);
        }
        }
        
    }
    return longest;
};
