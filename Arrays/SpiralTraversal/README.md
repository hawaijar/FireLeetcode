### Problem statement
Given a 2D array (m x n) nums, return all elements of the array in spiral order.

##### Example 1:
![figure1](https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg)

##### Example 2:
![figure1](https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg)

## Explanation

### Solution (Brute force)

We will have to traverse the array(2D) along the path that's mentioned in the above diagrams -

- Traverse the array from left to right
- Traverse the array from (top)right to bottom
- Traverse the array from (bottom) right to the left
- Traverse the array from (bottom) left to the top

We need 4 (four) loops - one for each traversal. The only thing that we need to watch out is that while we're traversing for the _bottom_ and _left_, we need to ensure the below conditions while traversing their loop.

Note: These conditions won't be required if the given array is a square (m x m).

- startRow <= endRow
- startCol <= endCol

(Refer the code)

#### Complexity:
Since we are traversing one time for each 4 loops, complexity will be O(n) + O(n) + O(n) + O(n) = 4*O(n) = O(n)

	Time complexity = O(n)

And since there's one extra array structure being used, space will be O(m x n)

	Space complexity = O(m x n)
