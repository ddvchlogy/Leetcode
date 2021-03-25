class Solution:
    def combinationSum4(self, nums: [int], target: int) -> int:
        nums.sort()
        dp = [1]
        if target < nums[0]:
            return 0
        for subtarget in range(1, target + 1):
            dp.append(0)
            for num in nums:
                if num > subtarget:
                    break
                dp[subtarget] += dp[subtarget - num]
        return dp[target]




s = Solution()
nums = [1,2,3]
target = 4
res = s.combinationSum4(nums, target)
print(res)