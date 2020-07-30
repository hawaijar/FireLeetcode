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
    fun levelOrderBottom(root: TreeNode?): List<List<Int>> {
        // base case
        if(root == null) return emptyList();
        
        var q:MutableList<TreeNode?> = mutableListOf();
        q.add(root)
        
        var Item:MutableList<Int>;
        var result:MutableList<MutableList<Int>> = mutableListOf();
    
    
        while(q.size > 0) {
            var qq: MutableList<TreeNode?> = mutableListOf();
            var list:MutableList<Int> = mutableListOf();
            for(temp in q) {
                if(temp == null) continue;
                list.add(temp.`val`);
                if(temp.left != null) qq.add(temp.left);
                if(temp.right != null) qq.add(temp.right);
            }
            result.add(0, list);
            q = qq;
        }
        return result;
    }
}
