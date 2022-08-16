#### Maximum Sum of Non-Adjacent elements

Write a function that takes an array of positive integers and returns maximum sum of non-Adjacent elements.

#### Example 1
```
Array = [1, 2, 3, 1]
Output = 4 (1 + 3)
```
#### Example 2
```
Array = [2,7,9,3,1]]
Output = 12 (2 + 9 + 1)
```
### Solution:
This problem is a **Dynamic programming** issue because you're not going to do this in **Brute Force** way (good luck, if you wish to do that way!).
Rather (read as **Wisely**), we try to solve the problem from a different perspective. 

Dynamic Programming is (mostly) about whether I **choose one over the other** and nothing else. 

Imagine if you know the max sum at (i-2)th and (i-1)th position of the array. 
Then the Max Sum at ith position will be :
    
    MaxSum(i) = Maximum (MaxSum(i-1), MaxSum(i-2) + Array[i])

How about applying the above idea for each array element starting from 0th index?

If we do, and store the result in a separate array (of same size as the input array), the last element of the new array will contain the solution.

So as describe above, we are trying to find the solution by looking at different perspective.
This way of finding solution is becoming a pattern in Dynamic Programming.
