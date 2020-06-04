/**
 * @param {number[]} nums
 * @return {number}
 * 解題概念: 一個array只有0與1, 取一段subarray, 其中0,1的數量是相同的, 找出最大長度的subarray
 * 用一個map儲存從0走到每個index時,  0與1出現次數的差值,
 * ex. 走到 index A時,  0,1的差值是3, 當後面繼續走到index B出現差值是3時
 * 代表由index 0到index B扣掉index 0到index A這段, 0與1出現的次數會剛好是相等的
 * [0...A......B]
 * 這時候我們再紀錄index B-index A的最大值,
 * 則可以找出符合題目要的subarray最大長度
 */
var findMaxLength = function(nums) {
    if(nums.length===0 || nums.length===1){
        return 0;
    }

    let totalSum = 0
    let res = 0;
    let indexMap = {0: -1}
    for(let idx in nums){
        if(nums[idx]){
            totalSum++;
        }else{
            totalSum--;
        }
        if(totalSum in indexMap){
            res = res>=idx-indexMap[totalSum]?res:idx-indexMap[totalSum]
        }else{
            indexMap[totalSum] = idx
        }
    }
    return res;
};