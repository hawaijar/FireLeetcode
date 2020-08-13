# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        count1 = 0
        current = headA
        while(current != None):
            current = current.next
            count1 += 1
        current = headB
        count2 = 0
        while(current != None):
            current = current.next
            count2 += 1
        
        diff = abs(count1 - count2)
        if(count1 > count2):
            current = headA
            temp = headB
        else:
            current = headB
            temp = headA
        
        count = 0
        while(count != diff):
            current = current.next
            count += 1
        
        # now current & temp pointing to nodes of same length
        while(current != None and temp != None):
            if(current == temp):
                return current
            current = current.next
            temp = temp.next
        
        return None
            
                
        
