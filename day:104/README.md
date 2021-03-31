## 19. Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Follow up: Could you do this in one pass?

### Example 1:

![figure](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg)

```
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```
<hr/>

### How I solve this problem?

First, iterate the list and push each node to an array. That way we'll know the total nodes as well as the nodes in the array.

```
let pointers = [];
let current = head;
while(current) {
  pointers.push(current);
  current = current.next;
}
```

Then once you get the array of nodes, parse the array from the end till the count is equal to 'n', and get the previous node.
Once you get the previous node of the node to be deleted, Then simply use list pointer to delete the node.

```
pointers[i - 1].next = pointers[i].next;
```
Where, i is the location where the node to be deleted is there.

Also, ensure to cover few base cases scenarios.

Here is the complete [solution](https://github.com/hawaijar/FireLeetcode/blob/master/day:104/removeNthFromEnd.js)
