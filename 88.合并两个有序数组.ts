/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = 0, j = 0
  nums1.splice(m,n)
  while(i < m + n) {
    if (nums1[i] > nums2[j]) {
      nums1.splice(i, 0, nums2[j])
      j++
    }
    i++
  }
  nums1.splice(nums1.length, 0, ...nums2.slice(j))
};
// @lc code=end

