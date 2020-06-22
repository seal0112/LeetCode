# 解題: 回傳只出現一次的數字, 要linear time
#      用迴圈跑一遍list, 用dict記錄每個數字出現的次數,
#      然後再跑一次dict的迴圈, 把數字為1的key回傳就好
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        dict = {}

        for num in nums:
            if num in dict:
                dict[num] += 1
            else:
                dict[num] = 1

        for key in dict.keys():
            if dict[key] == 1:
                return key