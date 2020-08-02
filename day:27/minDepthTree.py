# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root: TreeNode) -> int:
        if(root is None): return 0;
        return self.findMinimumPath(root);
        
    def findMinimumPath(self, node):
        if(node is None): return None;
        left = self.findMinimumPath(node.left);
        right = self.findMinimumPath(node.right);
    
        if(left is None and right is None): return 1;
    
        if(left is None): return 1 + right;
        if(right is None): return 1 + left;
    
        return 1 + min(left, right);
