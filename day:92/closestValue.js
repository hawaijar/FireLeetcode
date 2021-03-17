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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let queue = [root];
    let distance = Math.abs(target - root.val);
    let result = root.val;
    
    // Do BFS and find the right node
    while(queue.length > 0) {
        let node = queue.shift();
        let temp = Math.abs(target - node.val);
        if(temp < distance) {
            distance = temp;
            result = node.val;
        }
        if(node.left) {
            queue.push(node.left);
        }
        if(node.right) {
            queue.push(node.right);
        }
    }
    return result;
    
};
