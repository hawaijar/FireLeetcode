### 24. Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head.

### Example 1:

![nodes picture](https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg)

```
Input: head = [1,2,3,4]
Output: [2,1,4,3]
```

<hr/>

### How do I approach solving it?

Well, I guess we don't to manipulate any pointers. We just need to to **swap the values**!

Create two pointers - *current* and *next* , where *current* initially points to *head* of the list. The *next* pointer initially points to the *second* node in the list.

Now iterate with the condition that *next* is not *null* as shown below -

```
while(next) {
  ...
  ...
}
```
Then comes the *meat* of the logic -

*Swap the values of the current and next pointers* and move them *two steps* ahead as shown below -

```
  while(next) {
    ...
    ...
    current = next.next;
    next = current.next;
    ...
  }
```

That means, we keep on swapping the node values for every pairs. That's it!

Here is the complete [solution](https://github.com/hawaijar/FireLeetcode/blob/master/day:105/swapPairs.js)
