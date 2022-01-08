### Container With Most Water
[Leetcode link](https://leetcode.com/problems/container-with-most-water/)

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return _the maximum amount of water a container can store._

Notice that you may not slant the container.

### Example 1:
![image](../assets/image.jpeg)

**Input**: height = [1,8,6,2,5,4,8,3,7]

	Output: 49
**Explanation:**

The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

### Approach

- Take two pointers - _left_ & _right_ where _left_ is initially at index 0 and _right_ is at last index of the heights array

- initialise _largetstArea_ = 0

For left < right, repeat the below steps:

  - Area = height * breadth, where
  - height = min(height(left), height(right))
  - width = right - left
  - Update _largestArea_ as Area if it's less than it.
  - if height(left) < height(right)
    - left += 1

    else:
    - right -= 1

Finally, return _largestArea_
