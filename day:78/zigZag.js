/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // base cases
    if(s === '') return ''
    if(numRows === 1) return s;
    const STEP = (2 * numRows) - 2;
    const result = [];
    for(let i = 0; i < numRows; i++) {
        let j = i;
        while(j < s.length) {
            result.push(s[j]);
            // middle characters
            if(i !== 0 && i !== (numRows - 1) && (j + STEP - 2 * i) < s.length) {
                result.push(s[j + STEP - 2 * i])
            }
            j += STEP;
        }
    }
    return result.join('')
};
