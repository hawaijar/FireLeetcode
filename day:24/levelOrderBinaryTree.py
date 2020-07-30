# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
        #base case
        if(root is None): return [];
    
        q = [root];
        result = [];
    
        while(len(q) > 0):
            qq = [];
            list = [];
            for i in range(len(q)):
                temp = q[i];
                if(temp is None): continue;
                list.append(temp.val);
                if(temp.left): qq.append(temp.left);
                if(temp.right): qq.append(temp.right);
            result.insert(0, list);
            q = qq;
        return result;
