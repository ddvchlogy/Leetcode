#
# @lc app=leetcode.cn id=290 lang=python3
#
# [290] 单词规律
#

# @lc code=start
class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        dic = {}
        wordList = s.split(' ')
        if len(pattern) != len(wordList):
            return False
        for (index, word) in enumerate(wordList):
            if pattern[index] not in dic:
                if word in list(dic.values()):
                    return False
                dic[pattern[index]] = word
            elif dic[pattern[index]] != word:
                return False
            print(dic)
        return True


# @lc code=end


testPattern = 'abba'
testStr = 'dog dog dog dog'
s = Solution()

print(s.wordPattern(testPattern, testStr))