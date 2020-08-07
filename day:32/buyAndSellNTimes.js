/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    
    let current = 0;
    let next = 0;
    let highestSoFar = prices[0];
    
    while(next + 1 <= prices.length) {
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
        profit = prices[prices.length - 1] - prices[0];
    }
    else {
        profit += highestSoFar - prices[current];
    }
    
    return profit;
    
};
