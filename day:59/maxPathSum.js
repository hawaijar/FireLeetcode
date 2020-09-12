/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */



function dfs(root, maxSum) {
    if(root === null) {
        return 0;
    }
    
    let left = dfs(root.left, maxSum);
    let right = dfs(root.right, maxSum);
    
    maxSum[0] = Math.max(maxSum[0], root.val + left + right);
    return Math.max(0, root.val + Math.max(left, right));
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = [-Infinity];
    dfs(root, maxSum);
    return maxSum[0];
    
};
