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
    fun check(head: TreeNode?, result: MutableList<Int?>) {
        if(head == null){
            result.add(null);
            return;
        }
        result.add(head.`val`);
        check(head.left, result);
        check(head.right, result);
    }
    fun isSameTree(p: TreeNode?, q: TreeNode?): Boolean {
        // base cases
        if(p == q) return true
        var r1:MutableList<Int?> = mutableListOf(-1);
        var r2:MutableList<Int?> = mutableListOf(-1);
    
        check(p, r1)
        check(q, r2);
    
        return r1.toString() == r2.toString();
    }
}
