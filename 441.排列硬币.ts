/*
 * @lc app=leetcode.cn id=441 lang=typescript
 *
 * [441] 排列硬币
 */

// @lc code=start
function arrangeCoins(n: number): number {
  return Math.floor((Math.sqrt(n * 8 + 1) - 1) / 2)
};
// @lc code=end

