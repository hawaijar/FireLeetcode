function check(head, result = []) {
    if(head === null){
        result.push(null);
        return;
    }
    result.push(head.val);
    check(head.left, result);
    check(head.right, result);
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // base cases
    if(p === q) return true
    let r1 = [];
    let r2 = [];
    
    check(p, r1)
    check(q, r2);
    
    return r1.toString() === r2.toString();
};
