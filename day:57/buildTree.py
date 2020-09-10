# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        #--- first create a map(val, index) from 'inorder' array -- */
        inorderMap = {val:index for index, val in enumerate(inorder)}
    
        preOrderIndex = 0;
    
        def helper(start = 0, end = len(inorder)):
            # base case
            if(start == end):
                return None;
            
            nonlocal preOrderIndex;

            rootVal = preorder[preOrderIndex];
            root = TreeNode(rootVal);

            # find the index of rootVal in 'inorder' array
            index = inorderMap[rootVal];

            # don't forget to increase preOrderIndex!
            preOrderIndex += 1;

            root.left = helper(start, index);
            root.right = helper(index + 1, end);

            return root;
    
        return helper();
        
