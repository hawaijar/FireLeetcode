/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    // special case
    if(digits.length === 0) return [];
    const output = [];
    const mapping = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    function combination(prefix, digits) {
        if(digits.length === 0) {
            output.push(prefix);
        }
        else {
            for(let letter of mapping[digits[0]]) {
                combination(prefix + letter, digits.slice(1) );
            }
        }
    }
    combination('', digits);
    return output;
};
