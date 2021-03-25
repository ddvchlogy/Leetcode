class Solution:
    def maxSubArray(self, nums: [int]) -> int:
        dp = [0] * (len(nums) + 1)
        ans = nums[0]
        for i, num in enumerate(nums,1):
            dp[i] = max(num, dp[i - 1] + num)
            ans = max(ans, dp[i])
        return ans




s = Solution()
nums = [-1]
res = s.maxSubArray(nums)
print(res)