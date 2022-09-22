/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
  function compare(tree1: TreeNode | null, tree2: TreeNode | null) {
    if (tree1 === null && tree2 === null) return true
    if (tree1 === null || tree2 === null) return false
    if (tree1.val !== tree2.val) return false
    return compare(tree1.left, tree2.right) && compare(tree1.right, tree2.left)
  }
  if(root === null) return true
  return compare(root.left, root.right)
};
// @lc code=end

