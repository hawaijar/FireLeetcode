const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
                 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

/**
* @param {number} n
* @param {string} result
* @return {string}
*/

function convert(n, result) {
    // base case
    if(n < 27) {
        result.push(alphabet[n - 1]);
        return result;
    }
    let x = n;
    if(n % 26 === 0) {
        x = x - 1;
    }
    let quotient = convert(Math.floor(x / 26), result); 
    if(n % 26 === 0) {
        let remainder = convert((x % 26) + 1, result);
    }
    else {
        let remainder = convert(x % 26, result);
    }
    
    return result;
}


/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    const result = [];
    return convert(n, result).join('')
};
