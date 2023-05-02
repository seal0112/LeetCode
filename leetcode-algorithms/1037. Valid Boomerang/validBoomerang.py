"""
1. 先檢查a, b, c三個點是不是有其中兩個相同，如果有責回傳False
2. 再檢查(a, b)和(b, c)的斜率(slope)是否相同，相同則在同一條線上，回傳False
3. 上述都不符合則回傳True

注意斜率可能會是0(水平線)或undefined(垂直線)
"""
class Solution:
    def isBoomerang(self, points: List[List[int]]) -> bool:

        if points[0] == points[1] or points[0] == points[2] or points[1] == points[2]:
            return False

        if points[0][0] - points[1][0] == 0:
            ab_slope = 0
        elif points[0][1] - points[1][1] == 0:
            ab_slope = None
        else:
            ab_slope = (points[0][1] - points[1][1]) / (points[0][0] - points[1][0])

        if points[0][0] - points[2][0] == 0:
            bc_slope = 0
        elif points[0][1] - points[2][1] == 0:
            bc_slope = None
        else:
            bc_slope = (points[0][1] - points[2][1]) / (points[0][0] - points[2][0])

        return not (ab_slope == bc_slope)