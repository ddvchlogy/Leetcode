/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
  if (!s)
    return true
  let x = t.indexOf(s[0])
  if (x === -1)
    return false
  return isSubsequence(s.slice(1), t.slice(x + 1))
};
// @lc code=end

