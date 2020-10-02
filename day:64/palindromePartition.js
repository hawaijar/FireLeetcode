let pMatrix = [];
let result = [];

function buildPTable(s) {
    const matrix = [];
    for(let char of s) {
        matrix.push(new Array(s.length).fill(0));
    }
    // all single char are palindrome themselves
    for(let i = 0; i < s.length; i++) {
        matrix[i][i] = 1;
    }
    // check palindrome for substrings (length of 2 and above)
    for(let col = 1; col < s.length; col++) {
        for(let row = 0; row < col; row++) {
            if(row + 1 === col) {
                // two chars case
                if(s[row] === s[col]) {
                    matrix[row][col] = 1;
                }
            }
            else {
                // more than two chars
                // check if the bottom-left is 1
                if(matrix[row+1][col-1]) {
                    // check whether the leftmost/rightmost chars are same;
                    // substrins between them is palindrome
                    if(s[row] === s[col]) {
                        matrix[row][col] = 1;
                    }
                }
            }
        }
    }
    return matrix;
}

function dfs(start, str, currentList) {
    if(start >= str.length) {
        result.push(currentList.slice());
    }
    else {
        for(let end =  start; end < str.length; end++) {
            // check the substring (start, end)
            if(pMatrix[start][end]) {
                currentList.push(str.slice(start, end + 1));
                dfs(end + 1, str, currentList);
                // backtrack it
                currentList.pop();
            }
        }
    }
}

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    pMatrix = buildPTable(s);
    dfs(0, s, [],);
    const r = result.slice();
    result = [];
    return r;    
};
