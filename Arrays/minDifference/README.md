#### Given two arrays (Array1, Array2), find the pair [x,y], where x => Array1 and y => Array2 such that absolute values (of them) is the minimum.

### Example
Array1 = [1, 3, 2, 8]
Array2 = [5, 10 15]

Output = [8, 5] because abs(8, 5) = 3 is the minimum in this case.

In other words, we have to find an element from each array such that when we plot them on the number-line, their difference should be the minimum.


### Solution

The brute force way is to iterate each element, find their absolute values and evaluate the minimum at the end of the iterations.

Time complexity in this case would be **O(n²)** as we have to check all the possible differences between each element from both arrays.

#### Can we do better?

We can improve the complexity to **O(nlogn)** by below algorithm.


First we sort the arrays and let's assume post sorting we have something like -

_Array1 = [A1, A2, A3, A4, .... An], where A1 < A2 < A3 < A4 .... < An_

_Array2 = [B1, B2, B3, B4, ... Bm], where B1 < B2 < B3 < B4 .... < Bm_

If A1 > B1, and since they're sorted, then we need to check A2 against B1 because that way abs(A2, B1) would be smaller than abs(A1,B1)
And similarly, if A1 > B1, then we check A1 against B2 and so on.

Let's try to understand the algorithm with an example -

A = [1 , 3, 6]

B = [4, 5, 10]

Take two pointers i and j = 0 each (pointing to first index of each array)

Initialization:

i = 0, j = 0

minimum = abs(A[0], B[0]) = 3

First iteration:

**minimum = abs(A[0],B[0]) = 3**

A[i] < B[j] => i += 1 , So i = 1, j = 0

Second iteration:

**minimum = abs(A[1],B[0]) = 1**

A[i] < B[j] => i += 1, So i = 2, j = 0

Third iteration:

**minimum = abs(A[2],B[0]) = 2**

A[i] > B[j] => j += 1, So i = 2, j = 1

So the answer is [3, 4] because their absolute values (1) is the minimum.
