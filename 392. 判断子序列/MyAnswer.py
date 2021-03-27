class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if not s:
            return True
        x = t.find(s[0])
        if x == -1:
            return False
        return self.isSubsequence(s[1:], t[x+1:])


                




sol = Solution()
s = "abcx"
t = "ahbgdc"
ans = sol.isSubsequence(s, t)
print(ans)