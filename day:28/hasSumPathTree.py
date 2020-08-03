# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: TreeNode, sum: int) -> bool:
        return self.hasSumFound(root, 0, sum);
    
    def hasSumFound(self, node, pval, sum):
        if(node is None): return False;
        
        t = node.val + pval;
    
        if(node.left is None and node.right is None):
            if(t == sum):
                return True;
            if( sum > 0 and t > sum): return False;
            if( sum < 0 and t < sum): return False;
        left = self.hasSumFound(node.left, t, sum);
        right = self.hasSumFound(node.right, t, sum);
    
        return left or right; 
        
