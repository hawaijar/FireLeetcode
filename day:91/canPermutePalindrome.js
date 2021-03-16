/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    // empty string is a palindrome
    if(s.length === 0) return true;
    // check if the string contains same character
    if(s.split('').every(x => x === s[0])) {
        return true;
    }
    // count frequency of each characters
    let hash = {};
    for(let c of s) {
        if(hash[c]) {
            hash[c] += 1;
        }
        else {
            hash[c] = 1;
        }
    }
    // if all frequencies are even, it's a palindrome
    if(Object.values(hash).every(x => x % 2 === 0)) {
        return true;
    }
    
    let oddFrequencies = Object.values(hash).filter(x => x % 2 === 1);
    // if there's only one odd/frequency characters, it's palindrome
    if(oddFrequencies.length === 1) {
        return true;
    }
    else {
        return false;
    }
    
};
