class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        #base case
        if(len(prices) == 0): return 0;
    
        smallestSoFar = prices[0];
        maxProfitSoFar = -sys.maxsize;
    
        for price in prices:
            smallestSoFar = min(smallestSoFar, price);
            maxProfitSoFar = max(maxProfitSoFar, (price - smallestSoFar));
    
        return maxProfitSoFar;
