/*
 * @lc app=leetcode.cn id=263 lang=typescript
 *
 * [263] 丑数
 */

// @lc code=start
function isUgly(n: number): boolean {
    if (n <= 0) return false
    if (n === 1) return true
    if (n % 2 === 0) return isUgly(n / 2)
    else if (n % 3 === 0) return isUgly(n / 3)
    else if (n % 5 === 0) return isUgly(n / 5)
    else return false
};
// @lc code=end

