# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        carry = 0;
        result = ListNode(0);
        current = result;
    
        while(l1 or l2):
            if(l1):
                carry += l1.val;
                l1 = l1.next;
            if(l2):
                carry += l2.val;
                l2 = l2.next;
            current.next = ListNode(carry % 10);
            current = current.next;
            carry = carry // 10;
            
        if(carry):
            current.next = ListNode(carry);
    
        return result.next;
