/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
	const result = [];
	const hash = {};
	function backtrack(comb, remain, start) {
		// base cases
		if (remain === 0) {
			const temp = comb.slice().sort((a,b) => a - b);
			if(!hash[temp.toString()]) {
				result.push(temp);
				hash[temp.toString()] = 1;
			}

			return;
		}
		if (remain < 0) {
			return;
		}

		for (let i = start; i < candidates.length; i++) {
			comb.push(candidates[i]);
			backtrack(comb, remain - candidates[i], i + 1);
			comb.pop();
		}
	}
	backtrack([], target, 0);
	return result; //  [ 2, 2, 3 ], [ 7 ] ]
    
};
