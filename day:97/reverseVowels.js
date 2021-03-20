/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // base case
    if(s.length <= 1) return s;
    
    const VOWELS = 'aeiouAEIOU'.split('');
    
    s = s.split('');
    
    let [i, j] = [0, s.length - 1];
    
    while(i < j) {
        if(s[i] === s[j]) {
            i += 1;
            j -= 1;
        }
        
        if(i >= j) break;
        
        if(VOWELS.includes(s[i])) {
            if(VOWELS.includes(s[j])) {
                [s[i], s[j]] = [s[j], s[i]];
                i += 1;
                j -= 1;
            }
            else {
                j -= 1;
            }
        }
        else {
            i += 1;
        }
        
    }
    return s.join('');
    
};
