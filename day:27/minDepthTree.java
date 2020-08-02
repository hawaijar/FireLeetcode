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
    public int minDepth(TreeNode root) {
        if(root == null) return 0;
        return findMinimumPath(root);
    }
    public int findMinimumPath(TreeNode node) {
        if(node == null) return -555;
        var left = findMinimumPath(node.left);
        var right = findMinimumPath(node.right);
    
        if(left == -555 && right == -555) return 1;
    
        if(left == -555) return 1 + right;
        if(right == -555) return 1 + left;
    
        return 1 + Math.min(left, right);
    }
};

