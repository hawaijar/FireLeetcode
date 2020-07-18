function evaluate(nums) {
  let hash = {};
  for (let i = 0; i < 10; i++) {
    hash[i] = 0;
  };
  let result = '';
  let current = nums[0];
  let i = 0;
  while(i < nums.length) {
    if(nums[i] === current) {
      hash[current] += 1;
    }
    else {
      result += `${hash[current]}${current}`;
      hash[current] = 0;
      current = nums[i];
      hash[current] += 1;
    }
    i += 1;
  }
  result += `${hash[current]}${current}`;
  return result;
}

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    // base case
  if(n === 1) return '1';
  if(n === 2) return '11';
  if(n === 3) return '21';

  let i = 3;
  let result = '21';
  while( i !== n) {
    result = evaluate(result);
    i += 1;
  }
  return result;
};
