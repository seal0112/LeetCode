class Solution:
    def reverseVowels(self, s: str) -> str:
        vowelsSet = 'aeiouAEIOU'
        sArr = list(s)

        l, r = 0, len(s)

        while l < r:
            if s[l] in vowelsSet:
                while r > l:
                    r-=1
                    if s[r] in vowelsSet:
                        self.swap(sArr, l, r)
                        break
            l+=1

        return ''.join(sArr)

    def swap(self, sArr:list, l:int, r: int) -> None:
        tmp = sArr[l]
        sArr[l] = sArr[r]
        sArr[r] = tmp
