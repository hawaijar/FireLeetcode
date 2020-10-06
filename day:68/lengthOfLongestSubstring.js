/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // base case
    if(s.length === 0) {
        return 0;
    }
    let longest = 0;
    
    for(let i = 0; i < s.length; i++) {
        let count = 0;
        let hash = {};
        for(let j = i; j < s.length; j++ ) {
            if(!hash[s[j]]) {
                count += 1;
                hash[s[j]] = 1;
                longest = Math.max(longest, count);
            }
            else {
                break;
            }
        }
    }
    return longest;
    
};
