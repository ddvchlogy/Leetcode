class Solution:
    def maxProfit(self, prices: [int]) -> int:
        lowest = prices[0]
        ans = 0
        for price in prices:
            lowest = min(price, lowest)
            ans = max(price - lowest, ans)
        return ans
            



s = Solution()
price = [7,1,5,3,6,4]
res = s.maxProfit(price)
print(res)