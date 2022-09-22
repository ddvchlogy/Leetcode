/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  const n = nums.length;
  if (n === 0) {
    return 0
  }
  let slow = 1;
  for (let fast = 1; fast < n; fast++){
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast]
      slow++
    }
  }
  return slow
};
// @lc code=end

