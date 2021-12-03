### Problem statement
Given a 2D array (m x n) nums, return all elements of the array in spiral order.

##### Example 1:
![figure1](https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg)

##### Example 2:
![figure1](https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg)

## Explanation

### Solution (Brute force)

We will have to traverse the array(2D) along the path that's mentioned in the above diagrams -

Initial values:

	startRow = 0, startCol = 0, endRow = noOfRows, endCol = noOfCols

- Traverse the array from left to right

  ``for i = startCol to endCol, print(array[startRow][i])``


``Then increment _startRow_ because we're going to print the rightmost column starting from it.``


- Traverse the array from (top)right to bottom

    ``for i = startRow to endRow, print(array[endCol][i])``

``Then decrement _endCol_ because we're going to print the bottom row starting from it.``
- Traverse the array from (bottom) right to the left

  ``for i = endCol to startCol, print(array[endRow][i])`` (decreasing order)

``Then decrement _endRow_ because we're going to print the left column starting from it.``
- Traverse the array from (bottom) left to the top

  ``for i = endRow to startRow, print(array[i][startCol])`` (decreasing order)

``Then increment _startCol_ because we're going to start the whole loop again starting from it.``


We need 4 (four) loops - one for each traversal. The only thing that we need to watch out is that while we're traversing for the _bottom_ and _left_, we need to ensure the below conditions while traversing their loop.

Note: These conditions won't be required if the given array is a square (m x m).

- startRow <= endRow
- startCol <= endCol

Exercise: Check without these conditions in _Single Row_ and _Single Column_ cases, and you'll know why they are required.

(Refer the code)

#### Complexity:
Since we are traversing one time for each 4 loops, complexity will be O(n) + O(n) + O(n) + O(n) = 4*O(n) = O(n)

	Time complexity = O(n)

And since there's one extra array structure being used, space will be O(m x n)

	Space complexity = O(m x n)
