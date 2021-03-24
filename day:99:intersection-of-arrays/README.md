### 349. Intersection of Two Arrays
[Leetcode link](https://leetcode.com/problems/intersection-of-two-arrays/)

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

### Example 1:

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
```

### Example 2:

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
```

Explanation: [4,9] is also accepted.


### What is my approach of solving this problem?

1. First, sort the two elements -
```
nums1.sort((a,b) => a - b)
nums2.sort((a,b) => a - b)
```

2. Take two pointers (i and j) tracking each array.
```
let [i, j] = [0, 0];
```

3. Iterate till any of the arrays exhausts the iteration and do the below -
```
while(i < nums1.length && j < nums2.length) {
  ...
} 
```

  - Check if the current numbers pointed by them (i & j) are equal. If they're, add to the result.
  ```
  if(nums1[i] === nums2[j]) {
            result.add(nums1[i]);
            i += 1;
            j += 1;
  }
  ```
  - If they're not equal, keep on incrementing the pointer pointing to the lesser value.
  ```
      if(nums1[i] < nums2[j]) {
            i += 1;
        }
        else {
            j += 1;
      }
  ```
  
  
