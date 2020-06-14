/**
 * @param {number[]} nums
 * @return {number}
 * 解題: 找出最長的subsequence, subsequence裡的每個值的要>=前一個 e.g. 1324 -> 134 or 124
 *      用dp, 每個值(nums[i])從自己的index(i) 開始往前(i-1, i-2, ..., 1, 0)比較, 然後找出比自己小的值(nums[j])
 *      檢查dp[j]的值有沒有大於自己(dp儲存到每個num的最長subsequence), 逐一往下檢查
 */
var lengthOfLIS = function(nums) {
    if(nums.length===0){
        return 0
    }
    if(nums.length===1){
        return 1
    }
    let dp = new Array(nums.length).fill(0)
    let parent = new Array(nums.length).fill(0)

    let maxLen=0;

    for(let i=1; i<nums.length; i++){
        for(let j=i-1; j>=0; j--){
            if(nums[i]>nums[j] && dp[i]<dp[j]+1){
                dp[i] = dp[j]+1;
                parent[i] = j;
                if(maxLen<dp[i]){
                    maxLen = dp[i]
                }
            }
        }
    }

    return maxLen+1
};