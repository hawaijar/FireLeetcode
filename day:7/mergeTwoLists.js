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
var mergeTwoLists = function(l1, l2) {
    // base cases
    if(!l1 && l2) return l2;
    if(!l2 && l1) return l1;
    if(!l1 && !l2) return null;
    
    let current1 = l1;
    let current2 = l2;
    let l3 = null;
    let current3;
    
    while(current1 !== null && current2 !== null) {
        let node;
        if(current1.val <= current2.val) {
            node = new ListNode(current1.val);
            current1 = current1.next;
        }
        else {
            node = new ListNode(current2.val);
            current2 = current2.next;
        }
        if(l3 === null) {
            l3 = node;
            current3 = l3;
        }
        else {
            current3.next = node;
            current3 = node;
        }
    }
    if(!current1) {
        // parse any leftover from current2
        current3.next = current2;
    }
    if(!current2) {
        // parse any leftover from current1
        current3.next = current1;
    }
    
    
    return l3;
    
};
