/*
 * @lc app=leetcode.cn id=191 lang=typescript
 *
 * [191] 位1的个数
 */

// @lc code=start
function hammingWeight(n: number): number {
  let ans = 0
  while (n !== 0) {
    n &= n - 1
    ans += 1
  }
  return ans
}
// @lc code=end

