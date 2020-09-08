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
var levelOrder = function(root) {
    if(root === null) return [];
    let result = [];
    let stack = [root];
    
    while(stack.length > 0) {
        let newStack = [];
        let temp = [];
        while(stack.length > 0) {
            let node = stack.shift();
            temp.push(node.val);
            if(node.left) {
                newStack.push(node.left);
            }
            if(node.right) {
                newStack.push(node.right);
            }
        }
        stack = newStack;
        result.push(temp);
    }
    return result;
    
};
