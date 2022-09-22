/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let standard = strs[0]
  let ans = ''
  if (standard === ans) 
    return ''
  for (let j = 0; j < standard.length; j++) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] !== standard[j])
        return ans
    }
    ans += standard[j]
  }
  return ans
};
// @lc code=end

