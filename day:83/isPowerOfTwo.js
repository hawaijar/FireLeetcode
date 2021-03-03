/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let count = 0;
    // base case
    if(n < 0) return false;
    
    while(n) {
        count += n & 1;
        if(count > 1) {
            return false;
        }
        n = n >> 1;
    }
    if(count === 1) {
        return true;
    }
    else {
        return false;
    }
    
};


// Note: The idea/solution is to count no. of 1s in the number. If the total 1s is 1, it should be power-of-2.
