/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        // base case
        if(head == null) return head;
        if(head.next == null) return head;
    
        var current = head;
    
        while(true) {
            var next = current.next;
            if(next == null) break;
            while( (next != null) && (next.val == current.val)) {
                next = next.next;
            }
            if(next != null) {
                current.next = next;
                current = next;
            }
            else {
                current.next = null;
                break;
            }
        }
    
        return head;
        
        }
}
