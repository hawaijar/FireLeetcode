/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // base case
    if(strs.length <= 1) {
        return [strs]
    }
    const hash = {};
    
    let words = strs;
    
    for(let word of words) {
        let sortedWord = word.split('').sort().join('');
        if(!hash[sortedWord]) {
           hash[sortedWord] = []; 
        }
        hash[sortedWord].push(word);
    }
    
    return Object.values(hash);
};
