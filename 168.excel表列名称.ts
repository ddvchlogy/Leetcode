/*
 * @lc app=leetcode.cn id=168 lang=typescript
 *
 * [168] Excel表列名称
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
  let ans: string[] = []
  while (columnNumber > 26) {
    let left = columnNumber % 26
    ans.unshift(String.fromCharCode((left === 0 ? 26 : left) + 64))
    columnNumber = Math.floor(columnNumber / 26) - (left === 0 ? 1 : 0)
  }
  ans.unshift(String.fromCharCode(columnNumber + 64))
  return ans.join('')
};
// @lc code=end

