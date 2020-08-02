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
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null) return 0;
    return findMinimumPath(root);
};

function findMinimumPath(node) {
    if(node === null) return null;
    let left = findMinimumPath(node.left);
    let right = findMinimumPath(node.right);
    
    if(left === null && right === null) return 1;
    
    if(left === null) return 1 + right;
    if(right === null) return 1 + left;
    
    return 1 + Math.min(left, right);
}
