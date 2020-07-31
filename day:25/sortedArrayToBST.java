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
    public TreeNode sortedArrayToBST(int[] nums) {
        // base cases
        if(nums.length == 0) return null;
        if(nums.length == 1) {
            return new TreeNode(nums[0]);
        }
        // find the mid of the array
        var mid = (int)Math.floor(nums.length/2);
        var left = Arrays.copyOfRange(nums, 0, mid);
        var right = Arrays.copyOfRange(nums, mid + 1, nums.length);
    
        var node = new TreeNode(nums[mid]);
        node.left = sortedArrayToBST(left);
        node.right = sortedArrayToBST(right);
        return node;
        
    }
}
