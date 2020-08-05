/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    // base cases(s)
    if(rowIndex === 0) return [1]
    if(rowIndex === 1) return [1,1]
    if(rowIndex === 2) return [1,2,1]
    
    result = [1,2,1]
    let count = rowIndex - 2;
    let i = 0;
    while(i < count) {
        let j = -1;
        let temp = [];
        let previous = result;
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
        result = temp;
        i += 1;
    }
    
    return result;
};
