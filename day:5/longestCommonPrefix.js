/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    let count = strs.length;
    let smallest = strs[0].length;
    
    for(let i = 1; i < count; i++) {
        if(strs[i].length < smallest) {
            smallest = strs[i].length;
        }
    }
    let i = 0;
    for(i = 0; i< smallest; i++) {
        let x = strs[0][i];
        let equal = true;
        for(let j = 1; j < count; j++) {
            if(strs[j][i] === x) {
                continue;
            }
            else {
                equal = false;
                break;
            }
        }
        if(!equal) {
            break;
        }
    }
    if(i === 0) {
        return '';
    }
    else {
        return strs[0].slice(0, i);
    }
    
};
