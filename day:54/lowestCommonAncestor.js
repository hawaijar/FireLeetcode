/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let rootVal = root.val;
    let [leftVal, rightVal] = [p.val, q.val];
    
    // check if p & q are on the left tree
    if( (leftVal < rootVal) && (rightVal < rootVal)) {
        return lowestCommonAncestor(root.left, p, q);
    }
    // check if p & q are on the right tree
    if( (leftVal > rootVal) && (rightVal > rootVal)) {
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
    
};
