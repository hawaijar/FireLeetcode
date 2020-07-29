/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean isPalindrome(List<String> list) {
        var i = 0;
        var j = list.size() - 1;
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
    public boolean isSymmetric(TreeNode root) {
        // base case(s)
        if(root == null) return true;
        if(root.left == null && root.right == null) return true;
    
        var q = new ArrayList<TreeNode>();
        q.add(root);
        while(q.size() > 0) {
            var list = new ArrayList<String>();
            var qq = new ArrayList<TreeNode>();
            while(q.size() > 0) {
                var temp = q.remove(0);
                if(temp == null) {
                    list.add("null");
                }
                else {
                    list.add(String.valueOf(temp.val));
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
