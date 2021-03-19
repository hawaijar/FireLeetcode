/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    // base case 
    if(pattern.length !== s.split(' ').length) return false;
    
    let hash = {};
    let tokens = s.split(' ');
    
    for(let i = 0; i < pattern.length; i++) {
        let currentPattern = pattern[i];
        let currentToken = tokens[i];
        if(hash[currentPattern]) {
            if(hash[currentPattern] !== currentToken) {
                return false;
            }
        }
        else {
            if(Object.values(hash).includes(currentToken)) {
                return false;
            }
           hash[currentPattern] = currentToken; 
        }
    }
    return true;
    
};
