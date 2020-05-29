/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 * 解題概念:
 * 概念類似longest common substring
 * 使用dp,
 * 1. 檢查A[i], B[j]的數值是否相同,
 *    如果相同就將dp[i-1][j-1]的數值+1存入dp[i][j](檢查之前的數值的最大連線數再加上自己的連線)
 * 2. 若A[i], B[j]的數值不相同
 *    則比較 dp[i-1][j], dp[i][j-1], dp[i-1][j-1]的值,
 *    找出最大的存入dp[i][j](檢查之前的數值的最大連線數)
 */
var maxUncrossedLines = function(A, B) {
    let aLen = A.length, bLen = B.length
    let dp = new Array(aLen);

    for(let a=0; a<aLen; a++){
        dp[a] = new Array(bLen)
    }

    for(let i=0; i<aLen; i++){
        for(let j=0; j<bLen; j++){
            if(A[i]===B[j]){
                dp[i][j] = (i>0&&j>0)?dp[i-1][j-1]+1:1
            }else{
                if(i>0&&j>0){
                    dp[i][j] = Math.max(0, dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
                }else if(i>0) {
                    dp[i][j] = Math.max(0, dp[i-1][j])
                }else if(j>0) {
                    dp[i][j] = Math.max(0, dp[i][j-1])
                }else{
                    dp[i][j] = 0
                }
            }
        }
    }

    return dp[aLen-1][bLen-1]
};