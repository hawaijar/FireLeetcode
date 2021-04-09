function powerSet(nums) {
	const result = [[]];
	function findSubset(first, set, range) {
		if(set.length === range) {
			result.push(set.slice());
			return;
		}
		for(let i =  first; i < nums.length; i++) {
			set.push(nums[i]);
			findSubset(i + 1, set, range);
			set.pop();
		}
	}
	for(let k = 1; k <= nums.length; k++) {
		findSubset(0, [], k);
	}
	return result;
}
