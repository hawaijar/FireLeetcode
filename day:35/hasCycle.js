/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // base case
    if(head === null) return false
    if(head.next === null) return false
    
    let current = head;
    let next = head.next.next;
    while(next !== null) {
        current = current.next;
        if(next.next === null) {
            return false;
        }
        next = next.next.next;
        if(current === next) {
            return true;
        }
    }
    return false;
    
};
