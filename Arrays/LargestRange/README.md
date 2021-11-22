### Problem statement
Given an integer array (not necessarily in order), find the largest range of it.

##### Example 1:

	Input: nums = [2, 1, 4, 5, 6, 3, 10, 12]

	Output: [1, 6]
because the numbers forming the sequence/range 1, 2, 3, 4, 5, 6 is there in the array and that range is the largest one.

## Explanation

### Solution1 (Brute force)
Sort the array and find the largest range/sequence.

Let's take the above array example - [2, 1, 4, 5, 6, 3, 10, 12]

- Sort the array and the updated array is [1, 2, 3, 4, 5, 6, 10, 12]
- Use two pointers _startIndex_ and _endIndex_ to track the sequence.
- Use another pointer _previousIndex_ to track the number before the _endIndex_ pointer
- Keep on incrementing _endIndex_ as long as it is _previousIndex_ + 1
- Keep on updating _previousIndex_ also.

#### Complexity:

Since we sort the array (O(nlogn)) and there is one loop (O(n)), the time complexity would be O(nlogn) - the greater of the two.

_Time complexity = O(nlogn)_

And since we return a new sorted array, the space complexity would be O(n)

_Space complexity = O(n)_

