/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
  let ans: number[][] = []
  for (let i = 1; i <= rowIndex + 1; i++) {
    let sub: number[] = []
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i)
        sub.push(1)
      else
        sub.push(ans[i - 2][j - 1] + ans[i - 2][j - 2])
    }
    ans.push(sub)
  }
  return ans[rowIndex]
};
// @lc code=end

