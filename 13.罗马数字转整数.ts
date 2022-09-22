/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  function isPre(pre: string, now: string): boolean {
    let seq = '0IVXLCDM'
    return seq.indexOf(pre) > seq.indexOf(now)
  }
  function parseRome(s: string): number {
    switch(s) {
      case 'I': return 1;
      case 'V': return 5;
      case 'X': return 10;
      case 'L': return 50;
      case 'C': return 100;
      case 'D': return 500;
      case 'M': return 1000;
      default: return 0;
    }
  }
  let mark = '0'
  let ans = 0
  for (const char of s.split("").reverse().join("")) {
    if (!isPre(mark, char)) {
      ans += parseRome(char)
      mark = char
    } else if (isPre(mark, char)) {
      ans -= parseRome(char)
    }
  }
  return ans
};
// @lc code=end

