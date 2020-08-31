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
var reverseList = function(head) {
    // base case
    if(head === null ||head.next === null) return head;
    
    let current = head;
    let next = current.next;
    
    while(next !== null) {
        let temp = next.next;
        next.next = current;
        current = next;
        next = temp;
    }
    head.next = null;
    head = current;
    
    return head;
};
