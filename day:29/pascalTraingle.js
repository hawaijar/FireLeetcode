/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // base cases(s)
    if(numRows === 0) return []
    if(numRows === 1) return [[1]]
    if(numRows === 2) return [[1], [1,1]]
    
    result = [[1], [1,1]]
    let count = numRows - 2;
    let i = 0;
    while(i < count) {
        let j = -1;
        let temp = [];
        let previous = result[result.length - 1];
        while(j < previous.length - 1) {
            if(j === -1) {
                temp.push(1);
            }
            else {
                temp.push(previous[j] + previous[j+1]);
            }
            j += 1;
        }
        temp.push(1);
        result.push(temp);
        i += 1;
    }
    
    return result;
    
};
