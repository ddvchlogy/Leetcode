class Solution:
    def minCostClimbingStairs(self, cost: [int]) -> int:
        dp = [0] * len(cost)
        for i, c in enumerate(cost):
            if i > 1:
                dp[i] = min(dp[i-1]+cost[i-1], dp[i-2]+cost[i-2])
            else:
                dp[i] = 0
        return min(dp[-1]+cost[-1], dp[-2]+cost[-2])





s = Solution()
cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
res = s.minCostClimbingStairs(cost)
print(res)