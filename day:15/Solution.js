/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let result = new Array(digits.length).fill(0);

  let carry = 0;
  for(let i = digits.length - 1; i >= 0; i--) {
    if(i === digits.length - 1) {
      let temp = digits[i] + 1;
      if(temp > 9) {
        result[i] = (10 - temp);
        carry = 1;
      }
      else {
        result[i] = temp;
      }
    }
    else {
      let temp = digits[i] + carry;
      if(temp > 9) {
        result[i] = (10 - temp);
        carry = 1;
      }
      else {
        result[i] = temp;
        carry = 0;
      }
    }
  }
  if(carry === 1) {
    result.unshift(1);
  }
  return result;
};
