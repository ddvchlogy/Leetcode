/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  nums.sort()
  return nums[Math.ceil((nums.length - 1) / 2)]
};
// @lc code=end

