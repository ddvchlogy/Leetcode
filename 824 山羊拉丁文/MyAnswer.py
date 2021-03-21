class Solution:
    def toGoatLatin(self, S: str) -> str:
        words = S.split()
        newWords = []
        num = 1
        for word in words:
            if word[0] not in ("a", "e", "i", "o", "u", "A", "E", "I", "O", "U"):
                word = word[1:] + word[0]
            word += "ma"
            word += num * "a"
            num += 1
            newWords.append(word)
        return " ".join(newWords)



S = "The quick brown fox jumped over the lazy dog"
a = Solution()
a.toGoatLatin(S)