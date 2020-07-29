/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun isPalindrome(list: MutableList<String>): Boolean {
        var i = 0;
        var j = list.size - 1;
        while(i < j) {
            if(list.get(i).equals(list.get(j))) {
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
    fun isSymmetric(root: TreeNode?): Boolean {
        // base case(s)
        if(root == null) return true;
        if(root.left == null && root.right == null) return true;
    
        var q = mutableListOf<TreeNode?>()
        q.add(root);
        while(q.size > 0) {
            var list = mutableListOf<String>();
            var qq = mutableListOf<TreeNode?>();
            while(q.size > 0) {
                var temp = q.removeAt(0);
                if(temp == null) {
                    list.add("null");
                }
                else {
                    list.add((temp.`val`).toString());
                    qq.add(temp.left);
                    qq.add(temp.right);
                }
            }
            if(!isPalindrome(list)) return false;
            q = qq;
    }
    return true;
        
    }
}
