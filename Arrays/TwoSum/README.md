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

_Time complexity = O(n²)_

And since there's no extra data structure being used, space will remain same (only loop variables and few temp variables)

_Space complexity = O(1)_






[Leetcode link](https://leetcode.com/problems/two-sum/)

[My solution](https://github.com/hawaijar/FireLeetcode/blob/feature/algoexpert/Arrays/TwoSum/index.js)

[Test cases](https://github.com/hawaijar/FireLeetcode/tree/feature/algoexpert/Arrays/__tests__)
