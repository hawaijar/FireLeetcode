Given a sorted array of integers, return a new sorted array which contain squares of each number in the given array.

Note: Can we do this without using any **sort()** function?

### Example
Input = [1, 2, 3]
Output = [1, 4, 9]

Input = [-4, 2, 3]
Output = [4, 9, 16]

### Approach

- Create a new empty array (this will contain the final output)
- Take two pointers, **i** and **j**, each pointing to the end of the given array
- if abs(originalArray[i]) > abs(originalArray[j])
  insert square(originalArray[i]) at the beginning of Output array
  increment i
- else,
  insert square(originalArray[j]) at the beginning of Output array
  decrement j
- Continue the above steps (3, 4) till **i < j**
- If **i == j**
  insert square(originalArray[i]) at the beginning of Output array

Let's take the input array = [-4, 2, 3]

1. Output = []
2. i = 0, j = 2
3. abs(array[i]) > abs(array[j])
   output = [16]

   i = 1
4. abs(array[j]) > abs(array[i])
   output = [9, 16]

   j = 1
5. Since i == j,

   output = [4, 9, 16]


### Complexity

For Time complexity, since we iterate the array only once and insertion of an element at the beginning of the array is O(1),
time complexity is O(n)

For Space complexity, it's also O(n) since we create a new output array.
