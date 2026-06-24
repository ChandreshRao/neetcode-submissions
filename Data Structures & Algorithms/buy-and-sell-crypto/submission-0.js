class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0, min = Infinity
        for(let i=0; i<prices.length; i++)
        {
            min = Math.min(min, prices[i])
            profit = Math.max(prices[i] - min, profit)
        }
        return profit
    }
}
