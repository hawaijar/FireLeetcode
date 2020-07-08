/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    let str = (x).toString();
    if(str.length <= 1) return true;
    
    let [i , j] = [0, str.length - 1];
    
    while(i < j) {
        if(str[i] === str[j]) {
            i += 1;
            j -= 1;
            continue;
        }
        else {
            return false;
        }
    }
    return true;
};
