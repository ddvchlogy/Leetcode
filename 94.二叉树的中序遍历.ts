/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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

function inorderTraversal(root: TreeNode | null): number[] {
  // let ans: number[] = []
  // if (root === null) return []
  // if (root.left !== null)
  //   ans.push(...inorderTraversal(root.left))
  // ans.push(root.val)
  // if (root.right !== null) 
  //   ans.push(...inorderTraversal(root.right))
  // return ans


  let ans: number[] = []
  let stack: TreeNode[] = []
  while(stack.length > 0 || root !== null) {
    if (root !== null) {
      stack.push(root)
      root = root.left
    } else {
      let tmp: TreeNode = stack.pop()!
      ans.push(tmp.val)
      root = tmp.right
    }
  }
  return ans
};
// @lc code=end

