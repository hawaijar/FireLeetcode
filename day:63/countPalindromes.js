/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    // let's create a 2D/table based on the input string
    const matrix = [];
    let count = 0;
    
    for(let char of s) {
        matrix.push(new Array(s.length).fill(0));
    }
    
    // all individual char (of the string) is palindrome
    for(let i = 0; i < s.length; i++) {
            matrix[i][i] = 1;
        count += 1;
        }
    
    for(let col = 1; col < s.length; col++) {
        for(let row = 0; row < col; row++) {
            // for substrings of length = 2, if the first & last equals ==> palindrome
            if(row === col - 1 && s[row] === s[col]) {
                matrix[row][col] = 1;
                count += 1;
            }
            else {
                if(matrix[row + 1][col - 1] === 1 && s[row] === s[col]) {
                    matrix[row][col] = 1;
                    count += 1;
                }
            }
        }
    }
    
    return count;
};
