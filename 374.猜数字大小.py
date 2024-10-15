#
# @lc app=leetcode.cn id=374 lang=python3
#
# [374] 猜数字大小
#

# @lc code=start
# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

class Solution:
    def guessNumber(self, n: int) -> int:
        i, j = 1, n
        while i <= j:
            m = i + (j - i) // 2
            if guess(m) == -1:
                j = m - 1
            if guess(m) == 1:
                i = m + 1
            if guess(m) == 0:
                return m

# @lc code=end

