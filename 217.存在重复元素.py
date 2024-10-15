#
# @lc app=leetcode.cn id=217 lang=python3
#
# [217] 存在重复元素
#
from typing import List

# @lc code=start
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        dic = {}
        for num in nums :
            if num in dic:
                return True 
            else :
                dic[num] = 1
        return False
# @lc code=end
testnums = [1,2,3,4]
s = Solution()

print(s.containsDuplicate(testnums))
