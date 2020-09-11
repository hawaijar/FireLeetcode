/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    // base case
    if(root === null) return null;
    
    let stack = [root];
    let result = [];
    
    while(stack.length > 0) {
        let subStack = [];
        for(let i = 0; i < stack.length; i++) {
            let node = stack[i];
            if(node.left) {
                subStack.push(node.left);
            }
            if(node.right) {
                subStack.push(node.right);
            }
            if(i + 1 >= stack.length) {
                break;
            }
            stack[i].next = stack[i + 1];;
            
        }
        stack = subStack;
    }
    
    return root;
    
};
