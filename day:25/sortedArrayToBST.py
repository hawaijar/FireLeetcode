# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        #base cases
        if(len(nums) == 0): return None;
        if(len(nums) == 1): return TreeNode(nums[0]);
        
        #find the mid of the array
        mid = len(nums)//2
        left = nums[0:mid]
        right = nums[mid + 1:]
    
        node = TreeNode(nums[mid]);
        node.left = self.sortedArrayToBST(left);
        node.right = self.sortedArrayToBST(right);
        return node;
        
