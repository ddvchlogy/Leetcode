/*
 * @lc app=leetcode.cn id=955 lang=typescript
 *
 * [955] 删列造序 II
 */

// @lc code=start
function minDeletionSize(strs: string[]): number {
  let ans = 0
  let mark: String[] = Array(strs.length).fill('')
  let flag = 0
  for (let j = 0; j < strs[0].length; j++) {
    for (let i = 0; i < strs.length; i++) {
      if (i !== 0 && strs[i][j] < mark[j]) {
        ans += 1
        flag = 0
        break
      }
      else if (mark[j] === strs[i][j]) {
        flag = i
      }
      else {
        mark[j] = strs[i][j]
      }
    }
    if (flag === 0)
      return ans
    else
      flag = 0
  }
  return ans
};
// @lc code=end

