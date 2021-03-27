class Solution:
    def waysToStep(self, n: int) -> int:
        dp = [0] * (n + 3)
        dp[0] = 0
        dp[1] = 0
        dp[2] = 1
        for i in range(3,n + 3):
            dp[i] = (dp[i-1] + dp[i-2] + dp[i-3]) % 1000000007
        return dp[n+2]



sol = Solution()
n = 5
ans = sol.waysToStep(n)
print(ans)