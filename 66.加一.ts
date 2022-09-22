/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  const a = digits.length - 1
  let ans: number[] = []
  let barriar = 1
  let n = 0
  for (let i = 0; i <= a; i++) {
    if (barriar) {
      n = digits[a - i] + 1
      barriar = 0
    } else {
      n = digits[a - i]
    } 
    if (n > 9) {
      ans.unshift(n % 10)
      barriar = 1
    } else {
      ans.unshift(n)
    }
  }
  if (barriar) ans.unshift(barriar)
  return ans
}
// @lc code=end
