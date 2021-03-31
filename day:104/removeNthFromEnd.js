/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let pointers = [];
    let current = head;
    
    while(current) {
        pointers.push(current);
        current = current.next;
    }
    // base case
    if(pointers.length === 1 && n === 1) {
        return null;
    }
    let count = 1;
    for(let i = pointers.length - 1; i >= 0 ; i--) {
        if(n === count) {
            if(i - 1 < 0) {
                head = head.next;
                return head;
            }
            else if(i - 1 === 0) {
                head.next = head.next.next;
                return head;
            }
            else {
                pointers[i - 1].next = pointers[i].next;
                return head;
            }
        }
        count += 1;
    }
    
    
};
