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
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    // base cases
    if(l1 != null && l2 == null ) return l1;
    if(l1 == null && l2 != null) return l2;
    if(l1 == null && l2 == null) return null;
    
    ListNode current1 = l1;
    ListNode current2 = l2;
    ListNode l3 = null;
    ListNode current3 = null;
    
    while(current1 != null && current2 != null) {
        ListNode node;
        if(current1.val <= current2.val) {
            node = new ListNode(current1.val);
            current1 = current1.next;
        }
        else {
            node = new ListNode(current2.val);
            current2 = current2.next;
        }
        if(l3 == null) {
            l3 = node;
            current3 = l3;
        }
        else {
            if(current3 != null) {
                current3.next = node;
                current3 = node;
            }
            
        }
    }
    if(current1 == null) {
        // parse any leftover from current2
        current3.next = current2;
    }
    if(current2 == null) {
        // parse any leftover from current1
        current3.next = current1;
    }
    
    
    return l3;
    }
}
