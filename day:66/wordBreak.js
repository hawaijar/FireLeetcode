/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // base case
    if(s.length === 1) {
        if(wordDict.includes(s)) {
            return true;
        }
        else {
            return false;
        }
    }
    let queue = [0];
    let visited = new Array(s.length).fill(0);
    while(queue.length !== 0) {
        let start = queue.shift();
        if(visited[start] === 0) {
            for(let end = start; end < s.length; end++) {
                let word = s.slice(start, end + 1);
                if(wordDict.includes(word)) {
                    if(end === s.length - 1) {
                        return true;
                    }
                    queue.push(end + 1);
                }
            }
        }
        visited[start] = 1;
        
    }
    return false;
};
