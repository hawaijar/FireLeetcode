import sys

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dfs(self, root, maxSum):
        if(root is None):
            return 0;
    
        left = self.dfs(root.left, maxSum);
        right = self.dfs(root.right, maxSum);
    
        maxSum[0] = max(maxSum[0], root.val + left + right);
        return max(0, root.val + max(left, right));
    
    def maxPathSum(self, root: TreeNode) -> int:
        maxSum = [-sys.maxsize - 1];
        self.dfs(root, maxSum);
        
        return maxSum[0];
        
