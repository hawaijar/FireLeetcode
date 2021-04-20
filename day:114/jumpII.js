/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let farthest = 0;
	let jump = 0;
	let lastJumpIndex = 0;

	for(let i = 0; i < nums.length - 1; i++) {
		farthest = Math.max(farthest, i + nums[i]);
		if(i === lastJumpIndex) {
			jump += 1;
			lastJumpIndex = farthest;
		}
	}
	return jump;
};
