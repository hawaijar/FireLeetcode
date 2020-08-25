class Solution:
    def rob(self, nums: List[int]) -> int:
        # Max Amount (nth house) = max(Amount at nth house + Max Amount(n -2), 
        # Max Amount(n - 1))
        # base case
        if(len(nums) == 0): return 0;
    
        hr = [];
    
        for i in range(len(nums)):
            h2 = 0
            h1 = 0
            if (i - 1) >= 0:
                h1 = hr[i - 1]
            if (i - 2) >= 0:
                h2 = hr[i - 2]
            hr.append(max(h2 + nums[i], h1))
            
        return max(hr)
        
