/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let toStr = (x).toString(10);
    let sign = 1;
    if(toStr[0] === '-') {
      toStr = toStr.slice(1);
      sign = -1;
    }
    let value = 0;
    for(let i = 0; i < toStr.length; i++) {
      if(toStr[i] === '0' || toStr[i] === '-') continue;
      value += Math.pow(10, i) * +toStr[i];
    }
    value = sign * value;
    if(value > (-1 * Math.pow(2, 31)) && value < Math.pow(2, 31) - 1) {
      return value;
    }
    else{
      return 0;
    }
};

// Second solution using only Mathematical operations! (this solution is surprisingly taking more time (at leetcode) than the above one)
var reverse2 = function(x) {
  let result = 0;
  let sign = (x < 0)? -1: 1;
  x = Math.abs(x);
  while(x > 0) {
    result = 10*result + (x % 10);
    x = Math.floor(x / 10);
  }
  result = sign * result;
  if(result > (-1 * Math.pow(2, 31)) && result < Math.pow(2, 31) - 1) {
      return result;
    }
    else{
      return 0;
    }
}
