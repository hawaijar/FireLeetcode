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
    public boolean isBalanced(TreeNode root) {
        return height(root) == 200? false: true;
    }
    public int height(TreeNode node) {
        // base case
        if(node == null) return 0;
    
        var left = this.height(node.left);
        var right = this.height(node.right);
        
        // indicate the imbalance node using a value say, 200
    
        if(left == 200 || right == 200) return 200;
    
        if(Math.abs(left - right) > 1) return 200;
    
        return 1 + Math.max(left, right);
    }
}


