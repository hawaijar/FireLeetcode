
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const VALID_CHARACTERS = ['(', ')', '{', '}', '[', ']'];
    const MAPPING = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    
    // base case(s)
    if(s.length === 0) return true;
    if(s.length === 1) return false;
    
    const stack = [];
    for(let x of s) {
        if(!VALID_CHARACTERS.includes(x)) return false;
        if(Object.keys(MAPPING).includes(x)) {
            stack.push(x);
        }
        else if(Object.values(MAPPING).includes(x)) {
            let left = stack.pop();
            if(MAPPING[left] !== x) {
                return false;
            } 
        }
    }
    if(stack.length === 0) {
        return true;
    }
    else {
        return false;
    }
    
};
