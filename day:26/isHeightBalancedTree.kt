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
    fun isBalanced(root: TreeNode?): Boolean {
        if(height(root) == 200) return false
        return true
    }
    fun height(node:TreeNode?): Int{
        // base case
        if(node == null) return 0;
    
        var left = height(node.left);
        var right = height(node.right);
        
        // indicate the imbalance node using a value say, 200
    
        if(left == 200 || right == 200) return 200;
    
        if(Math.abs(left - right) > 1) return 200;
    
        return 1 + Math.max(left, right);
    }
}
