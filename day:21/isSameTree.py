# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def check(self, head, result):
        if(head is None):
            result.append(None)
            return;
        result.append(head.val);
        self.check(head.left, result);
        self.check(head.right, result);
        
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        #base cases
        if(p is q): return True
        r1 = [];
        r2 = [];
    
        self.check(p, r1)
        self.check(q, r2);
    
        return str(r1) == str(r2);
