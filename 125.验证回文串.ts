/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  let match = s.match(/[A-Za-z0-9]/g)
  if (!match) return true 
  let t = match.join('').toLowerCase()
  for (let i = 0; i < Math.ceil(t.length / 2); i++) {
    if (t[i] !== t[t.length - 1 - i])
      return false
  }
  return true
};
// @lc code=end

