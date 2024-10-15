#
# @lc app=leetcode.cn id=42 lang=python3
#
# [42] 接雨水
#

from typing import List
# @lc code=start


class Solution:
    def trap(self, height: List[int]) -> int:
        sum = 0
        stack = []
        for lineNumber, lineHeight in enumerate(height):
            while len(stack) != 0 and lineHeight > height[stack[-1]]:
                top = stack.pop()
                if not stack:
                    break
                waterWidth = lineNumber - stack[-1] - 1
                waterHeight = min(lineHeight, height[stack[-1]]) - height[top]
                sum += waterWidth * waterHeight
            stack.append(lineNumber)
        return sum

# @lc code=end
s = Solution()
# listTemp = [0,1,0,2,1,0,1,3,2,1,2,1] # 6
# listTemp = [4,2,0,3,2,5] # 9
listTemp = [5,2,0,3,2,5] # 13

print(s.trap(listTemp))
