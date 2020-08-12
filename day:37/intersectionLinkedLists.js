/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let current = headA;
    while(current !== null) {
        current.visited = true;
        current = current.next;
    }
    current = headB;
    while(current !== null) {
        if(current.visited) {
            return current;
        }
        current = current.next;
    }
    return null;
};
