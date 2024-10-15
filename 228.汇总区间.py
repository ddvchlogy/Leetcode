#
# @lc app=leetcode.cn id=228 lang=python3
#
# [228] 汇总区间
#
from typing import List
# @lc code=start
class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        result = []
        dic = {}
        for (i, num) in enumerate(nums):
            if num - 1 in dic.values():
                dic[list(dic.keys())[list(dic.values()).index(num - 1)]] = num
            else:
                dic[num] = num
        for key, value in dic.items():
            if(key is not value):
                result.append(str(key) + '->' + str(value))
            else:
                result.append(str(key))
        return result
# @lc code=end
testnums = [0,2,3,4,6,8,9]
s = Solution()

print(s.summaryRanges(testnums))
