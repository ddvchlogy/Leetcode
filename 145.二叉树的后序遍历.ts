/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function postorderTraversal(root: TreeNode | null): number[] {
  // let ans: number[] = []
  // if (root === null) return ans
  // if (root.left !== null)
  //   ans.push(...postorderTraversal(root.left))
  // if (root.right !== null)
  //   ans.push(...postorderTraversal(root.right))
  // ans.push(root.val)
  // return ans

  // let ans: number[] = []
  // let stack: TreeNode[] = []
  // let prev: TreeNode = null
  // while (stack.length > 0 || root) {
  //   if (root) {
  //     stack.push(root)
  //     root = root.left
  //   } else {
  //     root = stack.pop()
  //     if (root.right === null || root.right === prev) {
  //       ans.push(root.val)
  //       prev = root
  //       root = null
  //     } else {
  //       stack.push(root)
  //       root = root.right
  //     }
  //   }
  // }
  // return ans
  if (!root) return []
  let ans: number[] = []
  let stack: TreeNode[] = []
  stack.push(root)
  while (stack.length > 0) {
    let next = stack.pop()
    if (next) {
      stack.push(next)
      stack.push(null)
      if (next.right) stack.push(next.right)
      if (next.left) stack.push(next.left)
    } else {
      let tmp = stack.pop()
      ans.push(tmp.val)
    }
  }
  return ans
};
// @lc code=end

