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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    // base case
    if(root === null) return [];
    
    let q = [root];
    let result = [];
    
    while(q.length > 0) {
        let qq = [];
        let list = [];
        for(let i = 0; i < q.length; i++) {
            let temp = q[i];
            if(temp === null) continue;
            list.push(temp.val);
            if(temp.left) qq.push(temp.left);
            if(temp.right) qq.push(temp.right);
        }
        result.unshift(list);
        q = qq;
    }
    return result;
    
};
