class Solution:
    def maxSubArray(self, nums: [int]) -> int:
        m = len(nums)
        dp = [0] * m
        ans = dp[0] = nums[0]
        for i in range(1,m):
            dp[i] = max(nums[i], dp[i-1] + nums[i])
            ans = max(ans, dp[i])
        return ans




s = Solution()
nums = [-2,1,-3,4,-1,2,1,-5,4]
res = s.maxSubArray(nums)
print(res)