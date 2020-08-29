/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // base case
    if(head === null) return null;
    // handle all 1s cases
    while(head !== null && head.val === val) {
        head = head.next;
    }
    if(head === null) {
        return head;
    }
    
    let current = head;
    let next = current.next;
    
    while(next !== null) {
        if(next.val !== val) {
            current.next = next;
            current = next;
        }
        next = next.next;
    }
    if(current === head && current.val === val) {
        return null;
    }
    current.next = null;
    return head;
    
    
};
