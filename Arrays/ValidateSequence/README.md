### Problem statement
Given two array of integers, check whether the second array is a (sub)sequence of the first array.

A sequence, B of another array, A is a set of numbers that are present in the array A and in order though they need not be contiguous.

### Example
	A = [5, 1, 22, 25, 6, -1, 8, 10]

	B = [1, 6, -1, 10]

B is a sequence of A and hence output should be **true**

However, C = [6, -1, 5, 22] is not a sequence of A, though all its numbers are in A.


## Solution

Take two pointers - _i_ pointing to A and _j_ pointing to B.

Step 1: Iterate A and whenever the _character[i] == character[j]_, increment _j_

Step 2: Repeat Step 1 until the loop exits (return **false**) or _j_ reaches the end of B (return **true**), in that case it means all its characters are present in A.

Let us walk through an example -

	A = [5, 1, 22, 25, 6, -1, 8, 10]

	B = [1, 6, -1, 10]

	i = 0
	j = 0

	First iteration (i = 0)
	A[i] is not equal to B[j], continue loop

	Second iteration (i = 1)
	A[i] == B[j], increment j (j == 1), continue loop

	Third iteration (i = 2)
	A[i] is not equal to B[j], continue loop

	Fourth iteration (i = 3)
	A[i] is not equal to B[j], continue loop

	Fifth iteration (i = 4)
	A[i] == B[j], increment j (j == 2), continue loop

	Sixth iteration (i = 5)
	A[i] == B[j], increment j (j == 3), continue loop

	Seventh iteration (i = 6)
	A[i] is not equal to B[j], continue loop

	Eighth iteration (i = 7)
	A[i] == B[j], increment j (j == 4),
	j == length(B) and hence return **true**

#### Complexity:
Since we're using single loop, the time complexity will be O(n).

_Time complexity = O(n)_

And since there's no extra data structure being used, space will remain same (only loop variables and few temp variables)

_Space complexity = O(1)_
