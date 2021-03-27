## 16. 3Sum Closest
[Leetcode link](https://leetcode.com/problems/3sum-closest/)

Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

 

### Example 1:

```
Input: nums = [-1,2,1,-4], target = 1
Output: 2
```

### Explanation
The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

<hr />

### What is my approach?
It's kind of a brute-force way where we check for each element as to whether the sum with the element and other two elements in the array are close to the given target.

The way we approach is that, for each element, we take two pointer - left and right, 
