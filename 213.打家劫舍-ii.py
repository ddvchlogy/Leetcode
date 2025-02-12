#
# @lc app=leetcode.cn id=213 lang=python3
#
# [213] 打家劫舍 II
#

from typing import List
# @lc code=start

class Solution:
    def rob(self, nums: List[int]) -> int:
        def robRange(start: int, end: int) -> int:
            first = nums[start]
            second = max(nums[start], nums[start + 1])
            for i in range(start + 2, end + 1):
                first, second = second, max(first + nums[i], second)
            return second
        length = len(nums)
        if length == 1:
            return nums[0]
        elif length == 2:
            return max(nums[0], nums[1])
        else:
            return max(robRange(1, length - 1), robRange(0, length - 2))
# @lc code=end
test = [1,7,9,4]
s = Solution()

print(s.rob(test))
