/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    if(n <= 4) return 0;
    let count = 0;
    let divider = 5;
    while(n/divider > 0) {
        count += Math.floor(n/divider);
        divider = divider * 5;
    }
    return count;
    
};
