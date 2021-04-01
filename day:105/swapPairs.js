/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // base case
    if(!head || !head.next) return head;
    
    let current = head;
    let next = head.next;
    
    while(next) {
        [current.val, next.val] = [next.val, current.val];
        current = next.next;
        if(!current) break;
        next = current.next;
    }
    
    return head;
};
