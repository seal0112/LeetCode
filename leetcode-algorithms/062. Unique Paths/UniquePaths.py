class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [None] * n

        for i in range(n):
            if i == 0:
                dp[i] = [1] * m
            else:
                dp[i] = [1]+([0]*(m-1))

        for j in range(1, n):
            for k in range(1, m):
                dp[j][k] = dp[j-1][k]+dp[j][k-1]

        return dp[n-1][m-1]