class Solution:
    def maxSubArray(self, nums: [int]) -> int:
        for i in range(1, len(nums)):
            nums[i] += max(nums[i - 1], 0)
        return max(nums)




s = Solution()
nums = [-2,1,-3,4,-1,2,1,-5,4]
res = s.maxSubArray(nums)
print(res)