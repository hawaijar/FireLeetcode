/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun minDepth(root: TreeNode?): Int {
        if(root == null) return 0;
        return findMinimumPath(root);
    }
    fun findMinimumPath(node: TreeNode?): Int {
        if(node == null) return -555;
        var left = findMinimumPath(node.left);
        var right = findMinimumPath(node.right);
    
        if(left == -555 && right == -555) return 1;
    
        if(left == -555) return 1 + right;
        if(right == -555) return 1 + left;
    
        return 1 + Math.min(left, right);
    }
}
