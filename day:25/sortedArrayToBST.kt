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
    fun sortedArrayToBST(nums: IntArray): TreeNode? {
        // base cases
        if(nums.size == 0) return null;
        if(nums.size == 1) {
            return TreeNode(nums[0]);
        }
        // find the mid of the array
        var mid: Int = Math.floor(nums.size/2.toDouble()).toInt();
        var left = nums.sliceArray(0..mid-1);
        var right = nums.sliceArray(mid + 1..nums.size - 1);
    
        var node = TreeNode(nums[mid]);
        node.left = sortedArrayToBST(left);
        node.right = sortedArrayToBST(right);
        return node;
    }
}
