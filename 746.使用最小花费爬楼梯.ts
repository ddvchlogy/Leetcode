/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
  let dp = Array(cost.length).fill(0)
  for (let i = 0; i < cost.length; i++) {
    if (i > 1)
      dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    else
      dp[i] = 0
  }
  return Math.min(dp[dp.length - 1] + cost[cost.length - 1], dp[dp.length - 2] + cost[cost.length - 2])
};
// @lc code=end

