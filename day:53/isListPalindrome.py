# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        # base case
        if(head is None or head.next is None): return True;
    
        stack = [];
        current = head;
    
        # First parse
        while(current != None):
            stack.append(current.val);
            current = current.next;
        # Second parse
        current = head;
    
        while(current != None):
            if(stack.pop() != current.val):
                return False;
            current = current.next;
    
        return True;
