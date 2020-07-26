# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        #base case
        if(head is None): return head;
        if(head.next is None): return head;
    
        current = head;
    
        while(True):
            next = current.next;
            if(next is None): break;
            while(next and (next.val == current.val)):
                next = next.next;
            if(next):
                current.next = next;
                current = next;
            else:
                current.next = None;
                break;
    
        return head;
