/* --- Brute force (time limit exceed)
function maxOfNums(numbers: number[]) {
	return numbers.sort((a, b) => b - a)[0];
}

function maxSlidingWindow(nums: number[], k: number): number[] {
    const result: number[] = [];
	function findMax(firstK: number[]) {
		if(firstK.length < k) {
			return;
		}
		result.push(maxOfNums(firstK.slice(0, k)));
		findMax(firstK.slice(1));
	}
	findMax(nums);
	return result;
};
*/

function cleanQueue(queue: number[], nums: number[], start: number, end: number) {
	// Shift out (remove from front) any index that's out of window
	while(queue.length > 0 && queue[0] < start) {
		queue.shift();
	}
	// Pop out (remove from rear) any index i in queue, where nums[end] > nums[i]
	while(queue.length > 0 && nums[end] > nums[queue[queue.length - 1]]) {
		queue.pop();
	}
}
function maxSlidingWindow(nums: number[], k: number): number[] {
	// base cases
	if (nums.length === 0 || k === 0) {
		return [0];
	}
	if(k === 1) {
		return nums;
	}
	const n = nums.length;
	const result: number[] = [];
	const queue = [];
	// setup the queue first
	for(let i = 0; i < k; i++) {
		cleanQueue(queue, nums, 0, i);
		queue.push(i);
	}
	result.push(nums[queue[0]]);
	for (let i = k; i < n; i++) {
		let start = i - k + 1;
		cleanQueue(queue, nums, start, i);
		queue.push(i);
		result.push(nums[queue[0]]);
	}
	return result;
}

const nums = [7,2,4], k = 2;
console.log(maxSlidingWindow(nums, k));
// 0, 1
// 7
