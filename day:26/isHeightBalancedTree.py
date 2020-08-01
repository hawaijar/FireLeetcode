# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        if self.height(root) is None:
            return False
        else:
            return True;
        
    def height(self, node):
        #base case
        if(node is None): return 0;
    
        left = self.height(node.left);
        right = self.height(node.right);
    
        if(left is None or right is None): return None;
    
        if(abs(left - right) > 1): return None;
    
        return 1 + max(left, right);
