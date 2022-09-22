/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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

function preorderTraversal(root: TreeNode | null): number[] {
  // let ans: number[] = []
  // if (root === null) return ans
  // ans.push(root.val)
  // if(root.left !== null)
  //   ans.push(...preorderTraversal(root.left))
  // if (root.right !== null)
  //   ans.push(...preorderTraversal(root.right))
  // return ans

  let ans: number[] = []
  let stack: TreeNode[] = []
  while (stack.length > 0 || root !== null) {
    if (root !== null) {
      ans.push(root.val)
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      root = root.right
    }
  }
  return ans
};
// @lc code=end

