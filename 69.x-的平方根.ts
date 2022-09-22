/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根 
 */

// @lc code=start
function mySqrt(x: number): number {
  if (x === 0) {
    return 0
  }
  let ans = Math.floor(Math.exp(0.5 * Math.log(x)))
  return (ans + 1) ** 2 <= x ? ans + 1 : ans
};
// @lc code=end

