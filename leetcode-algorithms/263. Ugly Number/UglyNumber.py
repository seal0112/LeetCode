class Solution:
    def isUgly(self, n: int) -> bool:
        for divisor in [2, 3, 5]:
            while n and n % divisor == 0:
                n /= divisor

        return n == 1
