/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // base case 
    if(s.length !== t.length) return false;
    
    let hash = {}; // tracks whether the character has been parsed
    
    for(let i = 0; i < s.length; i++) {
        let [x, y] = [s[i], t[i]];
        if(x in hash){
            if(hash[x] !== y) {
                return false;
            }
        }
        else {
            // x is new
            // check y is also new
            if(Object.values(hash).includes(y)) {
                return false;
            }
            hash[x] = y;
        }
    }
    return true;
    
};
