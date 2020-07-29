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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // base case(s)
    if(root === null) return true;
    if(root.left === null && root.right === null) return true;
    
    let q = [root];
    while(q.length > 0) {
        let list = [];
        let qq = [];
        while(q.length > 0) {
            let temp = q.shift();
            if(temp === null) {
                list.push('null');
            }
            else {
                list.push(temp.val);
                qq.push(temp.left);
                qq.push(temp.right);
            }
        }
        if(!isPalindrome(list)) return false;
        q = qq;
    }
    return true;
};

function inorder(root, result) {
    // base case
    if(root === null) {
        result.push('null');
        return;
    }
    inorder(root.left, result);
    result.push(root.val);
    inorder(root.right, result);
}

function isPalindrome(list) {
    let [i , j] = [0, list.length - 1];
    while(i < j) {
        if(list[i] === list[j]) {
            i += 1;
            j -= 1;
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}
