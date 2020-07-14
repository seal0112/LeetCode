```
解題: 時鐘題, 計算時針跟分針角度
     首先計算分針距離12點多遠每分鐘代表6度
     然後計算時針距離12點多遠, 每多一小時多30度, 再加上分針走的比例, 每增加一分鐘時針會多0.5度
     算出來的角度相減成result, 如果result大於180就用360-result, 不然的話就回傳result
```
class Solution:
    def angleClock(self, hour: int, minutes: int) -> float:
        hourDegree = (hour % 12) * 30 + (30 * minutes / 60)
        minutesDegree = minutes * 6

        if hourDegree > minutesDegree:
            result = hourDegree - minutesDegree
        else:
            result = minutesDegree - hourDegree

        return 360-result if result > 180 else result