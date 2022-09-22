/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  let newS = s.trimEnd()
  let lastSpace = newS.lastIndexOf(' ')
  return newS.length - 1 - lastSpace
};
// @lc code=end

