function isPalindrome(str) {
    // base case
    if(str.length <= 1) return true;
    if(str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, str.length - 1));
    }
    else{
        return false;
    }
}

/* --- Create the Palindromic table ------------- */
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
                    // substring between them is palindrome
                    if(s[row] === s[col]) {
                        matrix[row][col] = 1;
                    }
                }
            }
        }
    }
    return matrix;
}
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(str) {
    // base case
    if(str.length <= 1) return str;
    
    let longest = '';
    
    // ---- Timeout for larger string(s) on below solution ------
    // for(let i = 0; i < s.length; i++) {
    //     for(let j = i; j < s.length; j++) {
    //         let word = s.slice(i, j + 1);
    //         if(isPalindrome(word)) {
    //             if(word.length > longest.length) {
    //                 longest = word;
    //             }
    //         }
    //     }
    // }
    
    const matrix = buildPTable(str);
    
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < str.length; j++) {
            if(i > j) {
                continue;
            }
            if(matrix[i][j]) {
                let word = str.slice(i, j + 1);
                if(word.length > longest.length) {
                    longest = word;
                }
            }
        }
    }
    
    return longest;
    
};
