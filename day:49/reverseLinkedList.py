# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        # base case
        if(head == None or head.next == None): return head;
    
        current = head;
        next = current.next;
    
        while(next != None):
            temp = next.next;
            next.next = current;
            current = next;
            next = temp;
        head.next = None;
        head = current;
    
        return head;
