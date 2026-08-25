class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_val = prices[0]
        output = 0
        for price in prices:
            min_val = min(price, min_val)
            output = max(output, price - min_val)
        return output


        