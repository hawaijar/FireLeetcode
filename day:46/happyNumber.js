function evaluate(n, cache) {
    // base case
    if(n === 1) return true;
    
    let array = (n).toString().split('');
    let sum = array.reduce((acc, el) => {
        acc += Math.pow(+el, 2);
        return acc;
    }, 0);
    if(sum === 1) {
        return true;
    }
    if(cache[sum]) {
        return false;
    }
    cache.push(sum);
    return evaluate(sum, cache);
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let cache=[n];
    return evaluate(n, cache);
};
