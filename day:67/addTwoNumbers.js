
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
   let carry = 0;
   let result = new ListNode(0);
    let current = result;
    
    while(l1 || l2) {
        if(l1) {
            carry += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            carry += l2.val;
            l2 = l2.next;
        }
        current.next = new ListNode(carry % 10);
        current = current.next;
        carry = Math.floor(carry / 10);
    }
    if(carry) {
        current.next = new ListNode(carry);
    }
    
    return result.next;
    
};
