### Problem statement
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

##### Example 1:

Input: nums = [-1,0,1,2,-1,-4]

Output: [[-1,-1,2],[-1,0,1]]
##### Example 2:

Input: nums = []

Output: []
##### Example 3:

Input: nums = [0]

Output: []

## Explanation

### Solution1 (Brute force)
In this approach (the simplest one), there are three loops involved. Each iteration of the first loop will give the value _a_ and against it, we're running two inner(second, third) loops whose iteration value resembles _b_ and _c_

Then we finally check whether _a + b + c_ = _targetSum_

#### Complexity:

Since we're using three loops, the time complexity will be O(n³).

	Time complexity = O(n³)

And since there's no extra data structure being used, space will remain same (only loop variables and few temp variables)

	Space complexity = O(1)

###### Don't use this approach even in your testing. It's horribly slow.

### Solution2 (Using Two pointers)
In this approach, we best improve the space complexity to O(1) by sacrificing a bit on performance (sorting).

First we sort the array (complexity expense = O(nlogn))

Then we run two loops - the iteration value of the outer loop resembles the _a_ value and the inner loop will use two pointers to yield _b_ and _c_

This is an extension to _Two pointers solution_ of TwoSum problem. The idea is similar.

If _a + b + c = targetSum_, return [a,b,c]

#### Complexity:
Since we're using 2 loops and sorting is also done, the time complexity will be O(n²).

	Time complexity = O(n²)

And since there's no extra data structure used, space will be constant.
	Space complexity = O(1)

### Solution3 (Improved Two pointers - ignore duplicates)

Imagine we have a sample array like [1,1,1,1,1,2,2,2,2,3,3,3,4,5,6,7,8,8,8,8,9,10,10] and _targetSum = 5_, instead of repeating same loops for same values, we can skip them and improve the performance.

In the above example, let's say we start with _a=1_ (outer loop) and inside inner loop, we can skip duplicate 1s after it and _b_ index will start from _2_.
Similarly, _c_ will be pointing to the second last _10_

	Time complexity remains O(n²), but it'll be a better one when there are many duplicates in the array.
