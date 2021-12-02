### Problem statement
Given an integer array (not necessarily in order), find the largest range of it.

##### Example 1:

	Input: nums = [2, 1, 4, 5, 6, 3, 10, 12]

	Output: [1, 6]
because the numbers forming the sequence/range 1, 2, 3, 4, 5, 6 is there in the array and that range is the largest one.

## Explanation

### Solution1 (Brute force)
Sort the array and find the largest range/sequence.

Let's take the above array example - [2, 1, 4, 5, 6, 3, 10, 12]

- Sort the array and the updated array is [1, 2, 3, 4, 5, 6, 10, 12]
- Use two pointers _startIndex_ and _endIndex_ to track the sequence.
- Use another pointer _previousIndex_ to track the number before the _endIndex_ pointer
- Keep on incrementing _endIndex_ as long as it is _previousIndex_ + 1
- Keep on updating _previousIndex_ also.

#### Complexity:

Since we sort the array (O(nlogn)) and there is one loop (O(n)), the time complexity would be O(nlogn) - the greater of the two.

	Time complexity = O(nlogn)

And since we return a new sorted array, the space complexity would be O(n)

	Space complexity = O(n)

### Solution2 (Easy and Intuitive) - Using Hash structure

In this approach, we use a hash structure to eliminate any duplicates. And for each element, assuming it as the _endIndex_, we keep on decrementing and check if the decremented value (_startIndex_) is in the hash.
If it is, we know that's part of a sequence, and we continue this process until the _startIndex_ is not found in the hash.

Let's take the above array example -

	[5, 3, 2, 1, 4, 0, 10]

- We store all the elements in the Hash and marked them as 'false' (not visited)
- We start with _5_ (_endIndex_).
- We decrement _5_ to _4_. _4_ is in Hash. _startIndex_ = _4_ now.
- We decrement _4_ to _3_. _3_ is in Hash. _startIndex_ = _3_ now.
- We decrement _3_ to _2_. _2_ is in Hash. _startIndex_ = _2_ now.
- We decrement _2_ to _1_. _1_ is in Hash. _startIndex_ = _1_ now.
- We decrement _1_ to _0_. _0_ is in Hash. _startIndex_ = _0_ now.
- We decrement _0_ to _-1_. _-1_ is **not** in Hash. So _startIndex_ = _0_ now.
- Range is [0, 5]
- Next element is _3_ but since it's already visited we ignore it and the same for subsequent elements till _0_
- Final element is _10_, and it's range is [10,10] and hence ignore as the result.

#### Complexity:

Since we use Hash structure to ensure that we visited each element only once, the complexity would be O(n)

	Time complexity = O(n)

And since we are using a new Hash structure, space complexity would be O(n)

	Space complexity = O(n)
