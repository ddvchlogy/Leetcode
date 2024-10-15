#
# @lc app=leetcode.cn id=268 lang=python3
#
# [268] 丢失的数字
#
from typing import List
# @lc code=start
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        result = 0
        for num in nums:
            result ^= num
        for i in range(len(nums) + 1):
            result ^= i
        return result
# @lc code=end

testnums = [9,6,4,2,3,5,7,0,1]
s = Solution()

print(s.missingNumber(testnums))