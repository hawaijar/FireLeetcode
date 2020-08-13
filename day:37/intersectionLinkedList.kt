/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */

class Solution {
    fun getIntersectionNode(headA:ListNode?, headB:ListNode?):ListNode? {
        var count1 = 0
        var current:ListNode? = headA
        while(current != null){
            current = current.next
            count1 += 1
        }
        current = headB
        var count2 = 0
        while(current != null){
            current = current.next
            count2 += 1
        }
        
        var temp: ListNode?
        
        var diff = Math.abs(count1 - count2)
        if(count1 > count2){
            current = headA
            temp = headB
        }
        else{
            current = headB
            temp = headA
        }
        
        var count = 0
        while(count != diff){
            current = current?.next
            count += 1
        }
        // now current & temp pointing to nodes of same length
        while(current != null && temp != null){
            if(current == temp){
                return current
            }
            current = current?.next
            temp = temp?.next
        }
        
        return null
        
    }
}
