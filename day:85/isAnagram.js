/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let h1 = {};
    let h2= {};
    
    let count = 0;
    while(count < s.length) {
        h1[s[count]] = h1[s[count]]?h1[s[count]] + 1: 1;
        h2[t[count]] = h2[t[count]]?h2[t[count]] + 1 : 1;
        count += 1;
    }
    
    for(let key of Object.keys(h1)) {
        if(key in h2) {
            if(h1[key] === h2[key]) {
                continue;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    return true;
    
};
