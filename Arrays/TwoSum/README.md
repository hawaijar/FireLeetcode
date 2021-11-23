### Problem statement
Given an array of integers nums and an integer target, return any two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

_**Note**: If no such solution found, return an empty array_

#### Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [2,7]
Output: Because 2 + 7 == 9, we return [2,7].

#### Example 2:

Input: nums = [3,2,4], target = 6
Output: [2,4]

#### Example 3:

Input: nums = [3,3], target = 6
Output: [3,3]

## Explanation

Imaging this equation -

	targetSum = a + b

For each element _a_, we're checking whether _b_ = (targetSum - a) is existing in the array or not.

_How we find b will determine various solutions here_


### Solution1 (Brute force)
In this approach (the simplest one), there are two loops involved. Each iteration of the first loop will give the value _a_ and against it, we're running another inner(second) loop whose iteration value resembles _b_

Then we finally check whether _a + b_ = _targetSum_

#### Complexity:
Since we're using two loops, the time complexity will be O(n²).

	Time complexity = O(n²)

And since there's no extra data structure being used, space will remain same (only loop variables and few temp variables)

	Space complexity = O(1)

### Solution2 (Using Hash to improve performance)
In this approach, we improve the performance at the expense of extra memory (for Hash structure) by having only one loop.
For each element _a_ in each iteration, we find _b_ (_targetSum - a_) and store _b_ in the hash.

Every iteration, we check the iteration value is already in the hash. If it is, we know that it should have been added in the earlier iteration (_a value_) and hence return [a,b]

#### Complexity:
Since we're using 1 loop, the time complexity will be O(n).

	Time complexity = O(n)

And since there's extra data structure being used, and worst case we store all elements in it, space complexity will be O(n)

	Space complexity = O(n)

#### Can we do it better? A bit and that's Solution3

### Solution3 (Using Two pointers)
In this approach, we best improve the space complexity to O(1) by sacrificing a bit on performance (sorting).

First we sort the array (complexity expense = O(nlogn))

Then we use two pointers _a_ and _b_ pointing to each end of the array.

The idea is that if _a + b_ is > _c_ then since the array is sorted, _b_ pointer has to decrement.
And for _a + b < c_, the _a_ pointer needs to increment.

If _a + b = c_, return [a,b]

#### Complexity:
Since we're using 1 loop and sorting is also done, the time complexity will be O(nlogn).

	Time complexity = O(nlogn)

And since there's no extra data structure used, space will be constant.
	Space complexity = O(1)


[Leetcode link](https://leetcode.com/problems/two-sum/)

[My solution](https://github.com/hawaijar/FireLeetcode/blob/feature/algoexpert/Arrays/TwoSum/index.js)

[Test cases](https://github.com/hawaijar/FireLeetcode/tree/feature/algoexpert/Arrays/__tests__)
