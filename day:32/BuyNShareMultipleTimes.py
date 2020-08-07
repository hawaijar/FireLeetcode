class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0;
        current = 0;
        next = 0;
        highestSoFar = prices[0];
        
        while(next + 1 <= len(prices)):
            if(prices[next] >= highestSoFar):
                highestSoFar = prices[next];
                next += 1;
            else:
                profit += (prices[next - 1] - prices[current]);
                current = next;
                highestSoFar = prices[next];
              
        if(current == 0):
            profit = prices[len(prices) - 1] - prices[0];
        else:
            profit += highestSoFar - prices[current];

        return profit;
