### Kadane's Algorithm
Given an array of integers (containing positive and negative value), find the maximum sum of a contiguous SubArray.

#### Example 1
```
Array = [-3, -2, -1]
Output: -1
```
#### Example 2
```
Array = [1, 2, 3, -10, -1, 2, 3]
Output: 6
```

### Solution:
The idea is that we check if the values at an index i is contributing to the maxSubArray or not. 
#### How do we check this?
Imagine we have a maxSubArray, A and we check for each array element if the inclusion of them give a non-negative sum value. 

If the sum after the inclusion of the array element results **negative**, we exclude the element in the maxSubArray, but we capture the maxSumArray and update the largestSumArray value if the maxSubArray yields the maximum sum so far.

**This is not Dynamic Programming** because we're **not choosing something over another**. We may still continue using the previous Max Sum rather than discarding it if the current Index **is greater than it.**
Best example similar to this that involves **with Dynamic Programming** is the [**Best time to buy stock**](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
There we compare the previous maxProfit with the current profit and we **have to choose one over the other** and that's Dynamic Programming problem. 
