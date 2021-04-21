/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
	function permutation(prefix = [], suffix) {
		if(suffix.length === 0) {
			result.push(prefix.slice());
			return;
		}
		for(let i = 0; i < suffix.length; i++) {
			permutation([...prefix, suffix[i]], [...suffix.slice(0, i), ...suffix.slice(i + 1)])
		}
	}
	permutation([], nums);
	return result;
};
