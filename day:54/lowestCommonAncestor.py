# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        rootVal = root.val;
        [leftVal, rightVal] = [p.val, q.val];
    
        # check if p & q are on the left tree
        if( (leftVal < rootVal) and (rightVal < rootVal)):
            return self.lowestCommonAncestor(root.left, p, q);
        # check if p & q are on the right tree
        if( (leftVal > rootVal) and (rightVal > rootVal)):
            return self.lowestCommonAncestor(root.right, p, q);
        return root;
