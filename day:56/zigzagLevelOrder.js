/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(root === null) return [];
    
    let stack = [root];
    let result = [];
    let left = true;
    
    while(stack.length > 0) {
        let newStack = [];
        let temp = [];
        let node;
        while(stack.length > 0) {
            node = stack.shift();
            temp.push(node.val);
            if(node.left) {
                newStack.push(node.left);
            }
            if(node.right) {
                newStack.push(node.right);
            }
        }
        if(left) {
           result.push(temp); 
        }
        else {
            result.push(temp.reverse())
        }
        
        left = !left; // change the direction!
        stack = newStack;
    }
    return result;
    
};
