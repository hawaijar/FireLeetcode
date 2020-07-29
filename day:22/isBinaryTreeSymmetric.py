# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        #base case(s)
        if(root is None): return True;
        if(root.left is None and root.right is None): return True;
    
        q = [root];
        while(len(q) > 0):
            list = [];
            qq = [];
            while(len(q) > 0):
                temp = q.pop(0);
                if(temp is None):
                    list.append('null');
                else:
                    list.append(temp.val);
                    qq.append(temp.left);
                    qq.append(temp.right);
            if(self.isPalindrome(list) is False): return False;
            q = qq;
                    
        return True;
    
    def isPalindrome(self, list):
        [i , j] = [0, len(list) - 1];
        while(i < j):
            if(list[i] == list[j]):
                i += 1;
                j -= 1;
                continue;
            else:
                return False;
        return True;
        
