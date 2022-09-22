/*
 * @lc app=leetcode.cn id=190 lang=typescript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
function reverseBits(n: number): number {
  let ans = 0
  let i = 32
	while (i--) {
    ans <<= 1
    ans += n & 1
    n >>= 1
  }
  return ans >>> 0
};
// @lc code=end

