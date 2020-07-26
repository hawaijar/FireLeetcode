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
var deleteDuplicates = function(head) {
    // base case
    if(head === null) return head;
    if(head.next == null) return head;
    
    let current = head;
    
    while(true) {
        let next = current.next;
        if(!next) break;
        while(next && (next.val === current.val)) {
            next = next.next;
        }
        if(next) {
            current.next = next;
            current = next;
        }
        else {
            current.next = null;
            break;
        }
    }
    
    return head;
    
};
