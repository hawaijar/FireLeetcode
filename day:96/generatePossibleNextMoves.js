/**
 * @param {string} currentState
 * @return {string[]}
 */
var generatePossibleNextMoves = function(currentState) {
    // base case
    if(currentState.length <= 1) return [];
    
    let result = [];
    
    for(let i = 0; i < currentState.length; i++) {
        if(i + 1 < currentState.length) {
            if(currentState[i] === '+' && currentState[i + 1] === '+') {
                result.push(currentState.slice(0, i) + '--' + currentState.slice(i + 2))
            }
        }
    }
    return result;
};
