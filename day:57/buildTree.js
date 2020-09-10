/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    /* --- first create a map(val, index) from 'inorder' array -- */
    const inorderMap = inorder.reduce((acc, el, index) => {
        acc[el] = index;
        return acc;
    }, {});
    
    let preOrderIndex = 0;
    
    function helper(start = 0, end = inorder.length) {
        // base case
        if(start === end) {
            return null;
        }
        let rootVal = preorder[preOrderIndex];
        let root = new TreeNode(rootVal);
        
        // find the index of rootVal in 'inorder' array
        const index = inorderMap[rootVal];
        
        // don't forget to increase preOrderIndex!
        preOrderIndex += 1;
        
        root.left = helper(start, index);
        root.right = helper(index + 1, end);
        
        return root;
    }
    
    return helper();
};
