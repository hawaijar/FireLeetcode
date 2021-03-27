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

The way we approach is that, for each element, we take two pointer - left and right, where left is pointing to the next element and right is pointing to the last element and using a loop, we check all the possible combinations of the element and other two elements.

Let's get this with an example.

Say, we're given the array [-3, 0, 1, 2, 3] and the target is 1.
In this case here's the possible iterations -

We'll have an outer loop from i = 0 to i = 3 (why not till 4 - this will be clear later)

```
for(let i = 0; i < nums.length - 2; i++) { // nums is the array in question
  ...
  ...
} 
```
Then for each element starting from i = 0, we create a left pointer == (i + 1) and right pointer === last array element
and start iterations with the condition (left < right)

```
  let current = nums[i];
  let [left, right] = [i + 1, nums.length - 1];
        
  while(left < right) {
    ...
    ...
  }

```
Inside the inner loop, we form the combination of three elements (nums[i], nums[left], nums[right]), add them and check the following conditions -

first define:

   result = sum(nums[i], nums[left], nums[right])
   
   minimumDistance = Infinity // this tracks minimum distance between sum and the target

Case 1: If the sum === target, return target because there won't be any sum closer than this.
```
let sum = current + nums[left] + nums[right];
if(sum === target) {
  return target;
}
```
Case 2: If the sum > target, we know that sum falls after the target and so we need to reduce the right pointer because that will bring the sum closer
to the target in the next iteration (since the array is in sorted order). 
Also we update the minumDistance if the current distance (sum - target) is less than current minimumDistance.
```
  if(sum > target) {
    if(sum - target < minDistance) {
      result = sum;
      minDistance = sum - target;
    }
    right -= 1;
  }
 ``` 
Case 3: If the sum < target, we know that sum falls before the target and so we need to increase the left pointer (same reason as above) 
Also we update the minumDistance if the current distance (sum - target) is less than current minimumDistance.
```
  if(sum < target) {
    if(target - sum < minDistance) {
      result = sum;
      minDistance = target - sum;
    }
    left += 1;
  }
 ``` 

Finally return the result value.
