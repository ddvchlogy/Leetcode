/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  nums.sort()
  for (let i = 0; i < nums.length - 1; i+=2) {
    if (nums[i] !== nums[i + 1])
      return nums[i]
  }
  return nums[nums.length - 1]
};
// @lc code=end

