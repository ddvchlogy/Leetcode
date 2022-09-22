/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  const pad = Math.max(a.length, b.length)
  const len = Math.max(a.length, b.length) - 1
  let newA = a.padStart(pad, '0')
  let newB = b.padStart(pad, '0')
  let ans: string[] = []
  let barriar = 0
  let n = 0
  for (let i = 0; i <= len; i++) {
    console.log(Number(newA[len - i]), Number(newB[len - i]), barriar)
    n = Number(newA[len - i]) ^ Number(newB[len - i]) ^ barriar
    barriar = Number(newA[len - i]) + Number(newB[len - i]) + barriar > 1 ? 1 : 0
    ans.unshift(n.toString())
  }
  if (barriar) ans.unshift(barriar.toString())
  return ans.join('')
};
// @lc code=end

