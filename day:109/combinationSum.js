/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    function backtrack(remain, comb, start) {
        // base cases
        if(remain === 0) {
            result.push(comb.slice());
            return;
        }
        if(remain < 0) {
            return;
        }

        for(let i = start; i < candidates.length; i++) {
            comb.push(candidates[i]);
            backtrack(remain - candidates[i], comb, i);
            comb.pop();
        }
   }
   backtrack(target, [], 0);
   return result;
};
