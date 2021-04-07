## 39. Combination Sum
[Leetcode link](https://leetcode.com/problems/combination-sum/)

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

### Example 1:

```
Input: candidates = [2,3,6,7], target = 7
```
```
Output: [[2,2,3],[7]]
```

### Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.


<hr />

### How I solved this problem?

All combination sums problems are related to *Back Tracking* and they can be solved using this technique only.

![Backtracking](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwJo4H6Ny617K12cK6SiHXp9NaHKH8-6jnLw&usqp=CAU)

Here is the discussion related to [Backtracking](https://medium.com/algorithms-and-leetcode/backtracking-e001561b9f28)

Here is my [solution](https://github.com/hawaijar/FireLeetcode/blob/master/day:109/combinationSum.js)
