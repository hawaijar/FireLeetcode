/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function diameterOfBinaryTree(root: TreeNode | null): number {
    let result = 0;
    
    function height(node: TreeNode) {
        if(!node) return 0;
        return 1 + Math.max(height(node.left), height(node.right));
    }
    
    function diameter(node: TreeNode) : number {
        if(!node) return 0;
        
        let leftHeight = height(node.left);
        let rightHeight = height(node.right);
        
        let leftDiameter = diameter(node.left);
        let rightDiameter = diameter(node.right);
        
        return Math.max(1 + leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));
    }
    
    return diameter(root) - 1;

};
