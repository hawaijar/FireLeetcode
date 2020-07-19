class Solution:
    def isAllPositive(self, nums):
        for x in nums:
            if x < 0: return False
        return True
        
    def isAllNegative(self, nums):
        for x in nums:
            if x > 0: return False
        return True
    
    def maxSubArray(self, nums: List[int]) -> int:
        #base cases
        if(self.isAllPositive(nums)): return sum(nums);
        if(self.isAllNegative(nums)): return max(nums);
        
        sumSoFar = -inf;
        sumUpToIndex = 0;
    
        for num in nums:
            sumUpToIndex += num;
            sumUpToIndex = max(sumUpToIndex, 0);
            sumSoFar = max(sumSoFar, sumUpToIndex)
    
        return sumSoFar;
