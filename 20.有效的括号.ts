/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  let stack: string[] = []
  for (const c of s) {
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c)
    } else {
      if (!stack.length) return false
      const topChar = stack[stack.length - 1]
      if (c === ')' && topChar !== '(') return false
      if (c === ']' && topChar !== '[') return false
      if (c === '}' && topChar !== '{') return false
      stack.pop()
    }
  }
  return !stack.length
};
// @lc code=end

