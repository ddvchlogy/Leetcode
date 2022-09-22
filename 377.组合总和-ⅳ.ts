/*
 * @lc app=leetcode.cn id=377 lang=typescript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
function combinationSum4(nums: number[], target: number): number {
  nums.sort()
  let dp = [1]
  if (target < nums[0])
    return 0
  for (let subtarget = 1; subtarget <= target; subtarget++) {
    dp.push(0)
    for (const num of nums) {
      if (num <= subtarget)
        dp[subtarget] += dp[subtarget - num]
    }
  }
  return dp[target]
};
// @lc code=end

