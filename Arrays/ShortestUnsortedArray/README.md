### Problem statement
Given an integer array , find the (indices of ) the shortest unsorted array that should be sorted to make the whole array sorted in nature.

If the array is already sorted, return [-1,-1]

##### Example 1:

Input: nums = [1, 2, 6, 5, 3, 4, 8]

Output: [2,5] because that's the unsorted subarray (indices) that needs to be sorted for the array to become sorted one.

## Explanation

### Solution1 (Brute force)
In this approach (the simplest one), create a new sorted array from the given array. Lets called it ArrayB
Then we compare from outside inward (both end points) between two arrays and find the first discrepancy between them. The two discrepancy, if found, will be the indices of the subarray that need to be sorted.

Consider the array

	[1, 2, 6, 5, 3, 4, 8]

ArrayA = [1, 2, 6, 5, 3, 4, 8]
ArrayB (sorted one) = [1, 2, 3, 4, 5, 6, 8]

As we can see above, the first discrepancy (from the start) is at index 2 and the second discrepancy (from the end) is at index 5.

	So the answer is [2, 5]

#### Complexity:

Since we sort the array and there's no nested loop, complexity would be O(nlogn)

	Time complexity = O(nlogn)

And since there's extra array (sorted one) used, space complexity would be O(n)

	Space complexity = O(n)

### Solution2 (scanning approach)

Step1: First, scan (from left) each element and find the elements that are out of order.

Step2: Second, find the smallest (A) from them and largest (B) from them.

Step3: Third, find the right positions, i & j from the Array

Step4: Return [i, j]

Consider the array

	[1, 2, 6, 5, 3, 4, 8]

In the above, the unsorted group = [6, 5, 3], so the smallest & largest numbers from this group = [3, 6]
In the given array, the correct positions of [3, 6] is [2, 5] and that's the answer.

#### Complexity:

Since we are just scanning the array (and w/o using any loop),

	Time complexity = O(n)

And since there's extra array (for storing unsorted numbers) used, space complexity would be O(n)

	Space complexity = O(n)
