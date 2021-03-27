class Solution:
    def findPaths(self, m: int, n: int, N: int, i: int, j: int) -> int:
        dp = [[0 for i in range(n)] for j in range(m)]
        tempdp = [[0 for i in range(n)] for j in range(m)]
        ans = 0
        dp[i][j] = 1

        for step in range(N):
            for row in range(m):
                for col in range(n):
                    if col == 0:
                        ans += dp[row][col]
                    if col == n-1:
                        ans += dp[row][col]
                    if row == 0:
                        ans += dp[row][col]
                    if row == m-1:
                        ans += dp[row][col]
            if step == N+1:
                break
            for row in range(m):
                for col in range(n):
                    up = dp[row-1][col] if row-1 >= 0 else 0
                    down = dp[row+1][col] if row+1 < m else 0
                    left = dp[row][col-1] if col-1 >= 0 else 0
                    right = dp[row][col+1] if col+1 < n else 0
                    tempdp[row][col] = up + down + left + right

            for row in range(m):
                for col in range(n):
                    dp[row][col] = tempdp[row][col]
        return ans % (10 ** 9 + 7)
            
        
    




s = Solution()
m = 1
n = 3
N = 3
i = 0
j = 1
ans = s.findPaths(m,n,N,i,j)
print(ans)