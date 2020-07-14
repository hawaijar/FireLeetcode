class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash = {};
        
        for i in range(len(nums)):
            current = nums[i]
            other = target - nums[i]
            if other in hash:
                return [hash[other], i]
            else:
                hash[nums[i]] = i
