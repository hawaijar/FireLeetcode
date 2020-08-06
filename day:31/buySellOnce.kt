class Solution {
    fun maxProfit(prices: IntArray): Int {
        // base case
        if(prices.size == 0) return 0;
    
        var smallestSoFar:Int = prices[0];
        var maxProfitSoFar = Int.MIN_VALUE
    
        for(price in prices) {
            smallestSoFar = minOf(smallestSoFar, price);
            maxProfitSoFar = maxOf(maxProfitSoFar, (price - smallestSoFar));
        }
    
        return maxProfitSoFar;
    }
}
