"""
解題: 陣列兩面找出三個值加總為零的subarray, 要求回傳所有的結果
     a,b,c相加為0只會有一種情況, a b c 都是 0,
     不然就是至少一個負數加一個或兩個正數 or 兩個負數加一個正數
     所以我們先排序nums, 然後for i from 0 to nums.length-2
     nums[i]為正數時, 跳出迴圈(因為nums[i]之後不會含有負數)
     然後每次回圈弄一個left跟right, left從i+1開始往後走, right從nums.length-1開始往前走
     如果三個值 nums[i], nums[left], nums[right]相加為0時, append到result
     然後left+1, 並檢查nums[left]是不是跟nums[left-1]數字相同(避免重複的組合加入result)
        right-1, 並檢查nums[right]是不是跟nums[right-1]數字相同(避免重複的組合加入result)
     如果三個值相加小於零, 代表負太多, left要往正數移動變大
     如果三個值相加大於零, 代表正太多, right要往負數移動變小
"""
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        if len(nums) < 3:
            return []

        nums.sort()
        result = []
        for i in range(len(nums)-2):
            left, right = i+1, len(nums)-1
            if nums[i] > 0:
                break
            if i>0 and nums[i-1]==nums[i]:
                continue

            while left < right:
                curSum = nums[i] + nums[left] + nums[right]
                if curSum == 0:
                    result.append([nums[i],nums[left], nums[right]])
                    left+=1
                    right-=1
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1
                elif curSum < 0:
                    left+=1
                else:
                    right-=1

        return result