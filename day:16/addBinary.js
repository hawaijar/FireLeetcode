/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a1, b1) {
    let a = a1.split('');
    let b =  b1.split('');
    let carry = 0;
    let result = [];
    while(a.length !== 0 || b.length !== 0) {
      let x, y;
      if(a.length > 0){
        x = parseInt(a.pop(), 10);
      }
      else {
        x = 0;
      }
      if(b.length > 0){
        y = parseInt(b.pop(), 10);
      }
      else {
        y = 0;
      }
      let sum = carry + x + y;
      if(sum >= 2) {
        if(sum === 2) {
          result.unshift(0);
        }
        else {
          result.unshift(1);
        }
        carry = 1;
      }
      else {
        result.unshift(sum);
        carry = 0;
      }
    }
    if(carry) {
      result.unshift(carry)
    }
    return result.join('');
};
