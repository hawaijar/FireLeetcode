function jump(nums) {
	let farthest; // tracks the furthest jump from the possible jump positions
	let jump = 0;
	let nextJumpPosition = 0; // the next position that gives the furthest jump
	let i = 0;
	while (i < nums.length - 1) {
		farthest = i + nums[i];
		if(farthest >= nums.length - 1) {
			return ++jump;
		}
		let start = i + 1; // first possible jump position
		let end = i + nums[i]; // last possible jump position
		// find the farthest in the range (start, end) and jump into it.
		for (let j = start; j <= end; j++) {
			if (j + nums[j] >= farthest) {
				farthest = j + nums[j];
				nextJumpPosition = j;
			}
		}
		jump += 1;
		i = nextJumpPosition;
	}
	return jump;
}

console.log(jump([7,0,9,6,9,6,1,7,9,0,1,2,9,0,3]));
