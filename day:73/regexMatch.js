/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(text, pattern) {
    // base case
    if(pattern.length === 0) {
        return text.length === 0;
    }
    // a*..., b*..., [a-z]*... case, where the next pointer (not the current one) of the pattern is '*'
    if(pattern.length && pattern[1] === '*') {
        // check by assuming '*' as 0 character (means, remove the element before it and check the isMatch())
        if(isMatch(text, pattern.slice(2))) {
            return true;
        }
        // check by assuming '*' as 1 or more characters before it
        if((text[0] === pattern[0] || pattern[0] === '.') && (text.length)) {
            return isMatch(text.slice(1), pattern);
        }
        return false;
    }
    else {
        if((text[0] === pattern[0] || pattern[0] === '.') && (text.length)) {
            return isMatch(text.slice(1), pattern.slice(1));
        }
        return false;
    }
};
