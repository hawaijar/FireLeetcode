/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean hasPathSum(TreeNode root, int sum) {
        return hasSumFound(root, 0, sum);
    }
    
    public boolean hasSumFound(TreeNode node, int pval, int sum) {
        if(node == null) return false;
        var t = node.val + pval;
    
        if(node.left == null && node.right == null) {
            if(t == sum) {
                return true;
            }
            if( sum > 0 && t > sum) return false;
            if( sum < 0 && t < sum) return false;
        }
    
        var left = hasSumFound(node.left, t, sum);
        var right = hasSumFound(node.right, t, sum);
    
        return left || right;
    }
    
}

