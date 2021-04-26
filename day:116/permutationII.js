/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let output = [];
    let hash = {};
	function permutations(prefix, arr) {
		if (arr.length === 0) {
            if(!hash[prefix.toString()]) {
               output.push(prefix); 
                hash[prefix.toString()] = true;
            }
			
		} else {
			for (let i = 0; i < arr.length; i++) {
				permutations(
					[...prefix, arr[i]],
					[...arr.slice(0, i), ...arr.slice(i + 1)]
				);
			}
		}
	}
	permutations([], nums);
	return output;
};
