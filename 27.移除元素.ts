/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  const n = nums.length
  let slow = 0;
  for (let fast = 0; fast < n; fast++) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast]
      slow++
    }
  }
  return slow
};
// @lc code=end

