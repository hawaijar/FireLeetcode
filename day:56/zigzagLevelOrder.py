# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
        if(root is None): return [];
    
        stack = [root];
        result = [];
        left = True;
    
        while(len(stack) > 0):
            newStack = [];
            temp = [];
            while(len(stack) > 0):
                node = stack.pop(0);
                temp.append(node.val);
                if(node.left):
                    newStack.append(node.left);
                if(node.right):
                    newStack.append(node.right);
            if(left):
                result.append(temp); 
            else:
                result.append(list(reversed(temp)))
        
            left = not left; 
            stack = newStack;
        return result;
    
