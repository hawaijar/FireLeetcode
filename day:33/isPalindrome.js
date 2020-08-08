/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //base case
    if(s.match(/\w+/g) === null) return true;
    s = s.replace(/\s+/g,'').toLowerCase().match(/[A-Za-z0-9]+/g).join('');
    let [i, j] = [0, s.length - 1]
    
    while(i < j) {
        if(s[i] === s[j]) {
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
