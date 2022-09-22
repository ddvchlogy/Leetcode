/*
 * @lc app=leetcode.cn id=1007 lang=typescript
 *
 * [1007] 行相等的最少多米诺旋转
 */

// @lc code=start
function minDominoRotations(tops: number[], bottoms: number[]): number {
  let merge: number[] = tops.concat(bottoms)
  let res = 0
  let equal = 0
  function count(arr, res) {
    var newArrays = arr.filter(function (item) {
      return item === res
    })
    return newArrays.length
  }
  for (let i = 0; i < 6; i++) {
    if (count(merge, i + 1) >= tops.length) {
      for (let j = 0; j < tops.length; j++) {
        if (tops[j] != i + 1 && bottoms[j] != i + 1)
          return -1
        else if (tops[j] == i + 1 && bottoms[j] == i + 1)
          equal += 1
        else if (bottoms[j] == i + 1)
          res += 1
      }
      return Math.min(res, tops.length - equal - res)
    }
  }
  return -1
};
// @lc code=end

