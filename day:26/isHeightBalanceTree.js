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
 * @return {boolean}
 */
var isBalanced = function(root) {
    return height(root) === null? false: true;
};

function height(node) {
    // base case
    if(node === null) return 0;
    
    let left = height(node.left);
    let right = height(node.right);
    
    if(left === null || right === null) return null;
    
    if(Math.abs(left - right) > 1) return null;
    
    return 1 + Math.max(left, right);
}
