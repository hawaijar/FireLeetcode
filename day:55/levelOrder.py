# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if(root is None): return [];
        result = [];
        stack = [root];
    
        while(len(stack) > 0):
            newStack = [];
            temp = [];
            while(len(stack) > 0):
                node = stack.pop(0);
                temp.append(node.val)
                if(node.left):
                 newStack.append(node.left)
                if(node.right):
                    newStack.append(node.right)
            stack = newStack;
            result.append(temp);
        return result
