## 34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?

 

### Example 1:

```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```

### Example 2:

```
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

### Example 3:

```
Input: nums = [], target = 0
Output: [-1,-1]
```

<hr />

### What is my approach?

First do a binary search and try to find the location (mid) that is equal to the target.
Once you get the location where the target is found, check left as well as right (i.e. the range) and see if there're more target on both sides.

Here is the walkthrough via code -
- Do a binary search and find the location of the target in the array
```
let [left, right] = [0, nums.length - 1];
while(left <= right) {
  let mid = Math.floor((left + right) /2);
  let result = [];
  if(nums[mid] === target) {
    ...
    ...
   }
   else {
      if(target < nums[mid]) {
         right = mid - 1;
      }
      else {
         left = mid + 1;
      }
   }
   ...
 }
 ```
 - Once you get the location where the target is found, check left as well as right (i.e. the range) and see if there're more target on both sides.
 ```
  // inside binary/search while loop
  if(nums[mid] === target) {
     // check if the target is also there on the left & right
        let previous = mid;
        while(previous >= 0 && nums[previous] === target ) {
          previous -= 1;
        }
        if(previous !== mid) {
           result.push(previous + 1);
        }
        else {
          result.push(mid);
        }
        let next = mid;
        while(next <= nums.length && nums[next] === target ) {
          next += 1;
        }
        if(next !== mid) {
          result.push(next - 1);
        }
        else {
          result.push(mid);
        }
        return result;
      }
 ```
 
 Here is the [solution](https://github.com/hawaijar/FireLeetcode/blob/master/day:107/searchRange.js) 
