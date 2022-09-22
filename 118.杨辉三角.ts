/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */

// @lc code=start
function generate(numRows: number): number[][] {
  let ans: number[][] = []
  for(let i = 1; i <= numRows; i++) {
    let sub: number[] = []
    for (let j = 1; j <= i; j++) {
      if(j === 1 || j === i)
        sub.push(1)
      else
        sub.push(ans[i - 2][j - 1] + ans[i - 2][j - 2])
    }
    ans.push(sub)
  }
  return ans
};
// @lc code=end

