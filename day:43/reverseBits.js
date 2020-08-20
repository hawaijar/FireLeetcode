/**
* @param {number } n - a positive integer
* @param {number} i - the ith index/position in the number
* @param {number} j - the jth index/position in the number
* @return {number} - updated n whose ith & jth bit has been swapped
**/

function swap(n, i, j) {
    // check whether the bit in ith and jth positions are same
    let jValue;
    if(j === 0) {
        jvalue = n & 1;
    }
    else {
        jValue = n >> j;
    }
    if(1 & ( n >> (i - 1)) === jValue) {
        return n; // nothing to do
    }
    // use XOR to flop '0'to '1' and '1' to '0'
    const xorBitMap = (j === 0)? (n << (i - 1)) | (n & 1) : (n << ( i - 1) | n << (j - 1))
    
    n = n ^ xorBitMap;
    return n;
}
`q`
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = 0;
    let power = 31;
    
    while(n) {
        result += (n & 1) << power;
        n = n >> 1;
        power -= 1;
    }
    
    return result;
    
};// Partial solution - need to optimize more!


