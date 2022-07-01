#### Waterfall Streams
[Leetcode link](https://leetcode.com/discuss/interview-question/1314770/online-assessment-interviewhackathon-question-solution-for-this-dynamic-programming-problem)

Waterfall Streams

You're given a two-dimensional array that represents the structure of an indoor waterfall and a positive integer that represents the column that the waterfall's water source will start at. More specifically, the water source will start directly above the structure and will flow downwards.
Each row in the array contains 0s and 1s, where 0 represents a free space and 1 represents a block that water can't pass through. You can imagine that the last row of the array contains buckets that the water will eventually flow into; thus, the last row of the array will always contain only 0s. You can also imagine that there are walls on both sides of the structure, meaning that water will never leave the structure; it will either be trapped against a wall or flow into one of the buckets in the last row.

As water flows downwards, if it hits a block, it splits evenly to the left and right-hand sides of that block. In other words, 50% of the water flows left and 50% of it flows right. If a water stream is unable to flow to the left or to the right (because of a block or a wall), the water stream in question becomes trapped and can no longer continue to flow in that direction; it effectively gets stuck in the structure and can no longer flow downwards, meaning that 50% of the previous water stream is forever lost.

Lastly, the input array will always contain at least two rows and one column, and the space directly below the water source (in the first row of the array) will always be empty, allowing the water to start flowing downwards.

Write a function that returns the percentage of water inside each of the bottom buckets after the water has flowed through the entire structure.
##### Example 1
```
Input: 
  [0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0],
  
Output: [0, 0, 0, 25,25, 0, 0]

```

### Solution

Note: This is one of the hardest solution to explain :-)

- Assign a pointer called "rowAbove" pointing to array[0] containing the source of water
- We assign a value of -1 (negative 1) against the source index. In the above example, we'll assign array[0][3] = -1
- An array index with negative value indicates presence of water whereas "1" indicates a block (water will stick there or can't pass through it)
- Create a loop from array (index = 1) and assign the iteration with currentRow
- The idea is to check the indices in the rowAbove and check if there's water.
- If there's water above, check the currentRow index and see if it's block. If it's not block, allow the water to flow by copying its value.
- If it's block, split the above water into equal parts (left and right). 
  - For splitting on the right
  - Create an index initially pointing to the current index of the current row
  - Increment the index (on the right) and see if the rowAbove (in that index) is 1. If it's 1, the water can't move and stick there. Break the iteration.
  - If the rowAbove (in that index) is negative, it means the water can flow down.
  - In that case, check whether there's a non-block space in the current row on the right side. If there's copy the rowAbove value in it.
  - Do similar steps for splitting on the left.
- The above steps to continue for all iterations and finally the last row will accumulate the result.

#### Time complexity = O(n³)
#### Space complexity = O(n)

