class Solution(object):
    def toGoatLatin(self, S):
        def convert(word):
            if word[0] not in 'aeiouAEIOU': #可以不用set 直接用字符串
                word = word[1:] + word[:1]
            return word + 'ma'

        return " ".join(convert(word) + 'a' * i 
                            for i, word in enumerate(S.split(), 1))

# enumerate(iterable: Iterable[_T], start: int=...) 默认是0
# 用来获取索引列表: (0, seq[0]), (1, seq[1]), (2, seq[2]), ...


S = "The quick brown fox jumped over the lazy dog"
a = Solution()
print(a.toGoatLatin(S))