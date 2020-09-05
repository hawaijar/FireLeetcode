/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    /**
        idea: Push the nodes to a stack. Traverse again the list and compare against the each first element of  the stack. 
        If matches, keep on POPPING off the stack. If traversal done with all elements pop-off, true else false.
    **/ 
    // base case
    if(head === null || head.next === null) return true;
    
    let stack = [];
    let current = head;
    
    // First parse
    while(current !== null) {
        stack.push(current.val);
        current = current.next;
    }
    // Second parse
    current = head;
    
    while(current !== null) {
        if(stack.pop() !== current.val){
            return false;
        }
        current = current.next;
    }
    
    return true;
};
