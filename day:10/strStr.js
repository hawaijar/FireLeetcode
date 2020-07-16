/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // base case
    if(needle.length === 0) return 0;
    if(haystack === needle) return 0;
    
    const sliceLength = needle.length;
    
    for(let i = 0; i < haystack.length; i++) {
        let window = (i + sliceLength);
        if(window <= haystack.length) {
            if(haystack.slice(i, window) === needle) {
                return i;
            }
        }
        else {
            return -1;
        }
    }
    return -1;
};
