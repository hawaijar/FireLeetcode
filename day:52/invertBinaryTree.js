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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root === null) return root;
    
    let queue = [root];
    
    while(queue.length > 0) {
        let node = queue.shift();
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        if(node.left) {
            queue.push(node.left);
        }
        if(node.right) {
            queue.push(node.right);
        }
    }
    return root;
};
