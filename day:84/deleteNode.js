/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // the idea is to keep shifting to the right all the nodes after the node to be deleted
    let current = node;
    let next = current.next;
    let temp = current;
    
    while(next !== null) {
        current.val = next.val;
        temp = current;
        current = next;
        next = next.next;
    }
    // since we're always shifting to the right, the last node must always be deleted.
    temp.next = null;
    
};
