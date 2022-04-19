#### Given a list of numbers, check whether the list is monotonic or not. An array is monotonic if it is either monotone increasing or monotone decreasing.

### Example:
If the list = [1,2,2,3] then the answer is **true**
If the list  [6,5,4,4] then the answer is also **true**

However, the list [1, 2, 3, 0] is **false**

However, if the list is [1, 2, 5] then the answer is 4!

### Solution:

- Identify whether the list is possibly ascending or descending order by comparing the first and last element.
- Iterate each element and check each consecutive numbers (**current** and **next**) based on first case and return false if they're not conforming to the order.
- Return true if all elements satisfy the order (determined in **Step 1**)

### Complexity

- Space complexity is **O(1)** as we're not using extra data structure
- Time complexity is **O(n)** as we're iterating the loop only once.
