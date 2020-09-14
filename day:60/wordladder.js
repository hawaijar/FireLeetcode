const ALPHABETS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    // base case
    if(!wordList.includes(endWord)) {
        return 0;
    }
    let src = beginWord;
    let queue = [beginWord];
    let level = 1;
    
    let processedWords = [];
    
    while(queue.length > 0) {
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let word = queue.shift();
            if(word === endWord) {
                return level;
            }
            if(processedWords.includes(word)) {
                continue;
            }
            else {
               processedWords.push(word); 
            }
            /* --- find all the possible combinations of words --- */
            for(let k = 0;  k < word.length; k++) {
                for(let x of ALPHABETS) {
                    let newWord = word.slice(0, k) + x + word.slice(k+1, word.length);
                    if(processedWords.includes(newWord)) {
                        continue;
                    }
                    if(wordList.includes(newWord)) {
                        if(newWord === endWord) {
                            return level + 1;
                        }
                        queue.push(newWord);
                    }
                }
            }
            
        }
        level += 1;
    }
    return 0;
};
