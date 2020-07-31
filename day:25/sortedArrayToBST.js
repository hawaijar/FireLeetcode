/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // base cases
    if(nums.length === 0) return null;
    if(nums.length === 1) {
        return new TreeNode(nums[0]);
    }
    // find the mid of the array
    let mid = Math.floor(nums.length/2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid + 1);
    
    let node = new TreeNode(nums[mid]);
    node.left = sortedArrayToBST(left);
    node.right = sortedArrayToBST(right);
    return node;
};
