"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

class Solution:
    def connect(self, root: 'Node') -> 'Node':
        #base case
        if(root == None): return None;
    
        stack = [root];
        result = [];
    
        while(len(stack) > 0):
            subStack = [];
            for i,_ in enumerate(stack):
                node = stack[i];
                if(node.left):
                    subStack.append(node.left);
                if(node.right):
                    subStack.append(node.right);
                if(i + 1 >= len(stack)):
                    break;
                stack[i].next = stack[i + 1]
            
            stack = subStack;
        return root;
