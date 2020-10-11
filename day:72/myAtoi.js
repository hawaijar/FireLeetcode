/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(str) {
    const VALID_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '+', '-'];
    const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    // check the leading character
    if(!VALID_CHARS.includes(str[0])) {
        return 0;
    }
    // Remove leading space(s) if any
    let i;
    for(i = 0; i < str.length; i++) {
        if(str[i] === ' ') {
            continue;
        }
        else {
            break;
        }
    }
    if(i === str.length) return 0; // all spaces condition
    str = str.slice(i);
    let sign = true; // positive by default
    i = 0;
    if(str[i] === '-') {
      sign = false;
      i += 1;
    }
    else if(str[i] === '+') {
        i += 1;
    }
    // check the current character. If not digit, return 0
    if(!DIGITS.includes(str[i])) return 0;

    let isLeadingZeroes = false;
    // discard leading zeroes, if any
    while(str[i] === '0') {
        i += 1;
        isLeadingZeroes = true;
    }
    
    // after zeroes, there shouldn't be non/digits characters
    if(!DIGITS.includes(str[i])) return 0;
    
    // start picking digits and stop when non/digit encounter
    let j = i;
    while(DIGITS.includes(str[i])) {
        i += 1;
    }
    let result = +(str.slice(j, i));
    if(!sign){
        result = -1 * result;
    }

    const INT_MIN = -Math.pow(2, 31 );
    if(result < 0) {
        if(result < INT_MIN) {
            return INT_MIN;
        }
    }
    const INT_MAX = 2147483647;
    if(result > INT_MAX) {
        return INT_MAX;
    }
    return result;
};
