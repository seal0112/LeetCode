"""
解題: Catalan Number, 題目給node數量, 求所有的可能的二元數組合
想像一個情況, 當有n個點, 其中一個點為root, 這時左子樹的node數是x, 則右子樹node數是n-1-x(減掉root及左子樹)
這時候左右子樹可能的組合為 numTrees(x) * numTrees(n-1-x),
我們要做的事就是假設當左子樹的node數量為0, 右子樹的node數量為n-1, 將這些組合加總出來後相加給numTrees(n),
一直計算到左子樹的node數為0, 右子樹的node數為n-1, 這時候就可以得到numTrees(n)的數值是多少
因為計算numTrees(n)要一直使用numTrees(n-1), numTrees(n-2), ... numTrees(0)
所以這一題我們使用dp來解, 然後給初始條件,
numTrees(0)會回傳1, 因為沒有node的空樹也是一種二元樹
numTrees(1)會回傳1, 因為只有一個點是root, 沒有其他組合
接下來用迴圈計算直到n, numTrees(2)的話就是 numTrees(1)*numTrees(0) + numTrees(0)*numTrees(1), 以此類推
"""
class Solution:
    def numTrees(self, n: int) -> int:
        dp = [0]*(n+1)
        dp[0] = 1
        dp[1] = 1

        for i in range(2, len(dp)):
            for j in range(0, i):
                dp[i] += dp[j] * dp[i-j-1]

        return dp[n]