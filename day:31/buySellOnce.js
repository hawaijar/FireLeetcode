/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // base case
    if(prices.length === 0) return 0;
    
    let smallestSoFar = prices[0];
    let maxProfitSoFar = -Infinity;
    
    for(let price of prices) {
        smallestSoFar = Math.min(smallestSoFar, price);
        maxProfitSoFar = Math.max(maxProfitSoFar, (price - smallestSoFar));
    }
    
    return maxProfitSoFar;
    
};
