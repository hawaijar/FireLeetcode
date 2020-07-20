/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const regexp = /(\w+)/g;
    const array = s.match(regexp) || [];
    if(array.length === 0) return 0;
    const last = array[array.length - 1];
    return last.length;
};
