# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        #base case
        if(head == None): return None;
        #handle all 1s cases
        while(head != None and head.val == val):
            head = head.next;
        if(head == None):
            return head;
    
        current = head;
        next = current.next;
    
        while(next != None):
            if(next.val != val):
                current.next = next;
                current = next;
            next = next.next;
        if(current == head and current.val == val):
            return None
        current.next = None;
        return head;
