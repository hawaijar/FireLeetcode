class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        # base case
        if len(nums) <= 1:
            return len(nums)
        
        count = 1
        j = 1
        for i in range(len(nums) - 1):
            while j < len(nums):
                if nums[i] == nums[j]:
                    j += 1
                else:
                    nums[i+1] = nums[j]
                    count += 1
                    j += 1
                    break
        
        return count
