/*
 * @lc app=leetcode.cn id=959 lang=typescript
 *
 * [959] 由斜杠划分区域
 */

// @lc code=start
function regionsBySlashes(grid: string[]): number {
  const n = grid.length;
  const f = new Array(n * n * 4).fill(0)
    .map((element, index) => { return index })
  
};
// @lc code=end

