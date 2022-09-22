/*
 * @lc app=leetcode.cn id=467 lang=typescript
 *
 * [467] 环绕字符串中唯一的子字符串
 */

// @lc code=start
function findSubstringInWraproundString(p: string): number {
  let dp: number[] = new Array(26).fill(0)
  let count = 1
  for (let index = 0; index < p.length; index++) {
    // 遍历 p 字符串
    let alphabetIndex = p.charCodeAt(index) - 97
    // alphabetIndex是字母的顺序，a->1，b->2以此类推
    if (index !== 0) {
      const diff = p.charCodeAt(index) - p.charCodeAt(index - 1)
      if (diff === 1 || diff === -25) // 判断当前字符和前一字符是否相连
        count += 1 // 相连即为新子串，子串数+1，保留至下一次循环
      else // 不相连为单字符子串，计数回到1
        count = 1
    } 
    else // 第一个字符为单字符子串
      count = 1
    dp[alphabetIndex] = Math.max(count, dp[alphabetIndex])
    // dp 为该字母的最多子串
  }
  return eval(dp.join("+"))
};
// @lc code=end

