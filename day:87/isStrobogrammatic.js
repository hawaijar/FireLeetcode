/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    // negative cases
    const nonStros = ['2', '3', '4', '5', '7'];
    if(num.split('').some(c => nonStros.includes(c))) {
        return false;
    }
    if(num.length === 1) {
        if(num[0] === '0' || num[0] === '1' || num[0] === '8') {
            return true;
        }
        return false;
    }
    
    let i = 0;
    let j = num.length - 1;
    
    while(i < j) {
        if(num[i] === '6' || num[i] === '9') {
            if(num[i] === '6' && num[j] !== '9') {
                return false;
            }
            else if(num[i] === '9' && num[j] !== '6') {
                return false;
            }
        }
        else if(num[i] !== num[j]) {
            return false;
        }
        i += 1;
        j -= 1;
    }
    
    return true;
    
};
