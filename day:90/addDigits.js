function add(digits) {
    if(digits < 10) return digits;
    const newDigits = String(digits).split('').reduce((ac, el) => ac + Number(el), 0);
    return add(newDigits);
}

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return add(num)
};
