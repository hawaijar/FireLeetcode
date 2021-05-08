/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// Three cases
// case 1: start belongs to the range, but end doesn't belong to the range
// case 2: start doesn't belong to the range but end belongs to the range
// case 3: start & end doesn't belong to the range.

var merge = function(intervals) {
    // base case
	if (intervals.length <= 1) {
		return intervals;
	}
	const result = [];
	// sort the intervals by start first
	intervals = intervals.sort((a, b) => a[0] - b[0]);
	for (let interval of intervals) {
		if (result.length === 0) {
			result.push(interval);
		} else {
			let [start, end] = [interval[0], interval[interval.length - 1]];
			// check if start belongs to any of the intervals captured in result
			let flag = false;
			for (let innerInterval of result) {
				let [innerStart, innerEnd] = [innerInterval[0], innerInterval[1]];
				// case 1: when start belongs to [innerStart, innerEnd]
				if (start >= innerStart && start <= innerEnd) {
					flag = true;
					if (end > innerEnd) {
						innerInterval[1] = end;
						break;
					}
				} else {
					// case 2: When start < innerStart but end belongs to [innerStart, innerEnd]
					if (start < innerStart && end >= innerStart && end <= innerEnd) {
						flag = true;
						innerInterval[0] = start;
						break;
					}
					// case 3: when start < innerStart and end > innerEnd
					else if (start < innerStart && end > innerEnd) {
						innerInterval[0] = start;
						innerInterval[1] = end;
						flag = true;
						break;
					}
				}
			}
			if (!flag) {
				result.push(interval);
			}
		}
	}
	return result;
};
