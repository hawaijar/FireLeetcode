/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let word1Indices = [];
    let word2Indices = [];
    
    for(let i = 0; i < wordsDict.length; i++) {
        const word = wordsDict[i];
        if(word === word1) {
            word1Indices.push(i);
        }
        else if(word === word2) {
            word2Indices.push(i);
        }
         
    }
    
    let smallest = Infinity;
    
    for(let x of word1Indices) {
        for(let y of word2Indices) {
            smallest = Math.min(smallest, Math.abs(x - y));
        }
    }
    return smallest;
    
};
