/*
 * @lc app=leetcode.cn id=1222 lang=typescript
 *
 * [1222] 可以攻击国王的皇后
 */

// @lc code=start
function queensAttacktheKing(queens: number[][], king: number[]): number[][] {
  let directions = [[0, 1], [0, -1], [1, 0], [1, 1], [1, -1], [-1, 0], [-1, 1], [-1, -1]]
  let q: number[][] = []
  function onTheBoard(chess: number[]): boolean {
    return chess[0] >= 0 && chess[0] < 8 && chess[1] >= 0 && chess[1] < 8
  }

  for (let i = 1; i <= 7; i++) {
    for (const direction of directions) {
      let newX = king[0] + direction[0] * i
      let newY = king[1] + direction[1] * i
      let newKing = [newX, newY]
      if (onTheBoard(newKing)) {
        queens.map(queen => {
          if (queen[0] === newKing[0] && queen[1] === newKing[1]) {
            q.push(queen)
            directions = directions.filter(d => d !== direction)
          }
        })
      }
    }
  }
  return q
};
// @lc code=end

