## 253. Meeting Rooms II
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

 

### Example 1:

```
Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
```

### Algorithm:
	1. Sort intervals based on start time and create an array of start times - startTimes
	2. Sort intervals based on end time and create an array of end times - endTimes
	3. Create two pointers (each pointing to the above two arrays) - startPointer, endPointer
	4. Iterate the startTimes array
		- if startPointer >= endPointer, that means a conference room is available. Reuse it. (counter -= 1)
		- Else, allocate a new conference room (counter += 1)
	5. return counter value.
