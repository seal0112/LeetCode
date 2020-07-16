'''
解題: 輸入字串, 把字串中的每個token翻轉後回傳, 並且去掉字串前後的空白
     先清掉前後的空白(javascript trim python strip)
     用split找出" "切割字串成每個token, 再從array的尾巴接成反轉的字串,
     如果index>0, 就在每個token間再接一個空白
'''
class Solution:
    def reverseWords(self, s: str) -> str:
        s = s.strip()
        arr = s.split(" ")
        result = ""
        for i in range(len(arr)-1, -1, -1):
            if arr[i] == "":
                continue
            result += arr[i]
            if i > 0:
                result += " "

        return result