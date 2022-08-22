### Next Permutation

Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such an arrangement is impossible, it must rearrange it to the lowest possible order (i.e., sorted in ascending order).

**_The replacement must be in place and use only constant extra memory._**

#### Example 1:

	Input: nums = [1,2,3]
	Output: [1,3,2]

#### Example 2:

	Input: nums = [1,1,5]
	Output: [1,5,1]

## Approach
There are few ideas that we need to remember before we start solving this problem and that's based on the nature of permutation.

- A permutation [3, 2, 1] is the highest/largest permutation and that's the last one. There is *no next* permutation after this.
  - This means that if the given list is already in descending order, there's no next permutation, and we return the sorted order of the given list.
- For a permutation [0,1,3,2], the next permutation is [0,2,1,3]
  - We applied rule 1 here. Find the suffix that's already in descending order. In the above case that is [3, 2]
  - That will be the last permutation, and we can't do anything about it.
  - The number before that suffix(3,2), in our case, is 1 and that is the pivot element.
  - Now find the smallest number in the suffix (3,2) that is greater than the pivot element(1). That is 2.
  - Swap the pivot element(1) and 2. So the suffix becomes [3,1]
  - Sort the suffix and it becomes [1,3]
  - Now the list becomes [0,2,1,3] and that is the next permutation.

Refer this blog for the details of the above explanation - https://www.nayuki.io/page/next-lexicographical-permutation-algorithm
