/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  let dp = Array(n + 1)
  for (let i = 0; i < n + 1; i++) {
    if (i < 2)
      dp[i] = 1
    else
      dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp.pop()
};
// @lc code=end

