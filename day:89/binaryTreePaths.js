let result = [];

function print(root, array) {
    if(root.left || root.right) {
        if(root.left) {
            print(root.left, [...array, root.val]);
        }
        if(root.right) {
            print(root.right, [...array, root.val]); 
        }
    }
    else {
        array.push(root.val);
        result.push(array.join('->'));
    }
    
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
 * @param {TreeNode} root
 * @return {string[]}ā
 */
var binaryTreePaths = function(root) {
    print(root, []);
    const temp = result.slice();
    result = [];
    return temp;
};
