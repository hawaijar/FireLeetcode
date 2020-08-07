class Solution {
    fun maxProfit(prices: IntArray): Int {
        var profit = 0;
        var current = 0;
        var next = 0;
        var highestSoFar = prices[0];
        
        while(next + 1 <= prices.size) {
            if(prices[next] >= highestSoFar) {
                highestSoFar = prices[next];
                next += 1;
            }
            else {
                profit += (prices[next - 1] - prices[current]);
                current = next;
                highestSoFar = prices[next];
            }
        }
        if(current === 0) {
            profit = prices[prices.size - 1] - prices[0];
        }
        else {
            profit += highestSoFar - prices[current];
        }

        return profit;
    }
}
