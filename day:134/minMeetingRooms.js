/*
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi],
return the minimum number of conference rooms required.
Example:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
 */

/*
	Algorithm:
	1. Sort intervals based on start time and create an array of start times - startTimes
	2. Sort intervals based on end time and create an array of end times - endTimes
	3. Create two pointers (each pointing to the above two arrays) - startPointer, endPointer
	4. Iterate the startTimes array
		- if startPointer >= endPointer, that means a conference room is available. Reuse it. (counter -= 1)
		- Else, allocate a new conference room (counter += 1)
	5. return counter value.
 */

function minMeetingRooms(intervals) {
  // base case
  if (!intervals || intervals.length === 0) return 0;
  let startTimes = intervals.sort((a, b) => a[0] - b[0]).map((a) => a[0]);
  let endTimes = intervals.sort((a, b) => a[1] - b[1]).map((a) => a[1]);

  let countRoom = 0;
  let [startPointer, endPointer] = [0, 0];
  while (startPointer < startTimes.length) {
    if (startTimes[startPointer] >= endTimes[endPointer]) {
      // reuse the free room
      endPointer += 1;
    } else {
      // allocate a new room
      countRoom += 1;
    }
    startPointer += 1;
  }
  return countRoom;
}

const intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
console.log(minMeetingRooms(intervals));


