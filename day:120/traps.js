/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // base case
	if (height.length < 3) {
		return 0;
	}
	let maxLefts = height.slice();
	let maxRights = height.slice();

	for (let i = 1; i < height.length; i++) {
		maxLefts[i] = Math.max(maxLefts[i - 1], maxLefts[i]);
	}
	for (let i = height.length - 2; i >= 0; i--) {
		maxRights[i] = Math.max(maxRights[i + 1], maxRights[i]);
	}
	return height.reduce((acc, current, index) => {
		acc += Math.min(maxLefts[index], maxRights[index]) - current;
		return acc;
	}, 0);
};
