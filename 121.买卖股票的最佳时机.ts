/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let lowest = prices[0]
  let ans = 0
  prices.forEach(price => {
    lowest = Math.min(price, lowest)
    ans = Math.max(price - lowest, ans)
  })
  return ans
};
// @lc code=end

