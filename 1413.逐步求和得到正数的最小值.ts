/*
 * @lc app=leetcode.cn id=1413 lang=typescript
 *
 * [1413] 逐步求和得到正数的最小值
 */

// @lc code=start
function minStartValue(nums: number[]): number {
  let startValue = 1
  let sum = 1
  for (const num of nums) {
    sum -= num
    startValue = Math.max(startValue, sum)
  }
  return startValue
};
// @lc code=end

