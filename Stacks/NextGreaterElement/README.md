### Finding next greater elements

Given a list of integer array, find an array whose elements in each index is next greater element than the corresponding element in the given input array.

Note:
- If there's no greater element for an index, assign as  **-1**
- Assume the given array is circular in nature. What this means is that when looking for greater element and if it's coming to the end, start looking from the beginning.

Well, sounds confusing. Isn't? Here's an example -

#### Example 1:
Input array, A = [1, 2, 3, 5, 5]

Output array, B = [2, 3, 5, -1, -1]

#### Explanation
For A[0], the next greater element is A[1] which is 2, So we assign B[0] = 2

For A[1], the next greater element is A[2] which is 3, So we assign B[1] = 3 and so on.


### Solution

We use an auxiliary Stack structure to handle this problem.
- Since the given input array is circular in nature, we need to iterate a loop that is 2 * size(array) and each index will be index % size(array). This is an awesome logic. Think about it!
- Push those indices to the stack, whose corresponding values (in the array) are less than the current element of the iteration.
- When we come to an element (of the iteration) whose value is greater than the top of the stack, keep popping and assign to the output array.
- Repeat till we run out of the loop.


