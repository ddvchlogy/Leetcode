/*
 * @lc app=leetcode.cn id=576 lang=typescript
 *
 * [576] 出界的路径数
 */

// @lc code=start
function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  let ans = 0
  const MOD = 10 ** 9 + 7
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  dp[startRow][startColumn] = 1
  for (let i = 0; i < maxMove; i++) {
    const dpNew = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let j = 0; j < m; j++) {
      for (let k = 0; k < n; k++) {
        // count 上一次移动有球停在这里的次数
        const count = dp[j][k];
        if (count > 0) { // 有球停在这
          for (const direction of directions) { // 四个方向
            let j1 = j + direction[0], k1 = k + direction[1];
            if (j1 >= 0 && j1 < m && k1 >= 0 && k1 < n) { // 这一步移动后还在界内
              dpNew[j1][k1] = (dpNew[j1][k1] + count) % MOD; // 标注这一步移动后球停的位置 对应位置加count次
            } else { // 这一步移动后出界
              ans = (ans + count) % MOD; // 直接加count次
            }
          }
        }
      }
    }
    dp = dpNew;
  }
  return ans
};
// @lc code=end

