class Solution:
    def climbStairs(self, n: int) -> int:
        dp= [0] * (n+1)
        for i in range(n+1):
            if i < 2:
                dp[i] = 1
            else:
                dp[i] = dp[i-1] + dp[i-2]
        return dp[-1]

        
            

s = Solution()
n = 4
res = s.climbStairs(n)
print(res)