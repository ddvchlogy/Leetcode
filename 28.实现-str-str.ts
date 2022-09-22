/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  // const m = haystack.length
  // const n = needle.length
  // if (n === 0) return 0
  // if (n > m) return -1
  // for (let fast = 0; fast < m; fast++) {
  //   if (haystack[fast] === needle[0]) {
  //     let flag = 0
  //     for (let slow = 0; slow < n; slow++) {
  //       if (haystack[fast + slow] === needle[slow])
  //         flag += 1
  //     }
  //     if (flag === n)
  //       return fast
  //   }
  // }
  // return -1
  return haystack.indexOf(needle)
};
// @lc code=end

