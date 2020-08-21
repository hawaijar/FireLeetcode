/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
   /* 
   /////// Below solution timeout /////
   let count = 0;
    while(n !== 0) {
        if(n & 1) {
            count += 1;
        }
        n >>= 1; // --> use 'unsigned 'right-shift' (>>>)
    }
    return count;
    */
    const hash = {
        '0': 0,
        '1': 1,
        '2': 1,
        '3': 2,
        '4':1,
        '5':2,
        '6':2,
        '7':3,
        '8':1,
        '9':2,
        '10':2,
        '11':3,
        '12':2,
        '13':3,
        '14':3,
        '15': 4
    }
    let count = 0;
    while(n !== 0) {
        let temp =  0x000F & n;
        count += hash[(temp).toString()];
        n >>>= 4;
    }
    
    return count;
    
};
