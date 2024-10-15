/*
 * @lc app=leetcode.cn id=258 lang=typescript
 *
 * [258] 各位相加
 */

// @lc code=start
function addDigits(num: number): number {
    if (num < 10) return num
    let addTemp = 0
    while (num !== 0) {
      addTemp += num % 10
      num = Math.floor(num / 10)
    }
    return addDigits(addTemp)
};
// @lc code=end

