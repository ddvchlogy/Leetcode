/*
 * @lc app=leetcode.cn id=171 lang=typescript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
function titleToNumber(columnTitle: string): number {
  let ans = 0
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    let num = columnTitle.charCodeAt(i) - 64
    ans += 26 ** (columnTitle.length - i - 1) * num
  }
  return ans
};
// @lc code=end

