class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        # base case
        if(len(nums) == 0): return 0;
        longest = 1;
    
        for num in nums:
            if(num - 1 not in nums):
                current = num;
                count = 1;
                while(current + 1 in nums):
                    count += 1;
                    current += 1;
                    longest = max(longest, count);
        
        return longest;
