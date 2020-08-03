/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    
    return hasSumFound(root, 0, sum);
    
};

function hasSumFound(node, pval, sum) {
    if(node === null) return false;
    const t = node.val + pval;
    
    if(node.left === null && node.right === null) {
        if(t === sum) {
            return true;
        }
        if( sum > 0 && t > sum) return false;
        if( sum < 0 && t < sum) return false;
    }
    
    const left = hasSumFound(node.left, t, sum);
    const right = hasSumFound(node.right, t, sum);
    
    return left || right;
}
