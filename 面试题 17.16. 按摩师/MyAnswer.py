class Solution:
    def massage(self, nums: [int]) -> int:
        dp = [0] * (len(nums) + 1)
        ans = 0
        for i, num in enumerate(nums, 1):
            if i < 3:
                dp[i] = nums[i - 1]
            else:
                dp[i] = num + ans
            ans = max(ans, dp[i-1])
        return max(ans,dp[-1])






s = Solution()
nums = [2,7,9,3,1]
res = s.massage(nums)
print(res)