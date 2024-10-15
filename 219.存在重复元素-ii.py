#
# @lc app=leetcode.cn id=219 lang=python3
#
# [219] 存在重复元素 II
#
from typing import List
# @lc code=start
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        dic = {}
        for i, num in enumerate(nums):
            if num in dic and abs(dic[num] - i) <= k:
                return True
            else:
                dic[num] = i
        return False
# @lc code=end
testnums = [1,2,3,1]
k = 3
s = Solution()

print(s.containsNearbyDuplicate(testnums, k))
