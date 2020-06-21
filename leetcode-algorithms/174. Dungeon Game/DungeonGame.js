/**
 * @param {number[][]} dungeon
 * @return {number}
 * 解題: 地城遊戲, 主要要從左上走到右下, 每進一間房間會扣血或加血, 問走到右下最少一開始要多少血
 *      很直覺地想到用dp, 但是因為地城裡面有加減, 所以正向的dp找不到答案
 *      改從反向, 從終點開始, 找出每個房間往終點的兩條路哪一條所需要的血量少, 加上進目前的房間至少需要多少血量
 *      min(dp[i+1][j], dp[i][j+1])-dungeon[i][j]
 *      如果計算出來是負數, 代表進房間時加血還cover掉後面會損寫的路, 所以進這間房間時只要有血量1即可
 *      max(1, min(dp[i+1][j], dp[i][j+1])-dungeon[i][j])
 *      最後就可以推導出dp[0][0], 代表從起點開始到終點需要多少血量
 */
var calculateMinimumHP = function(dungeon) {
    let m = dungeon.length;
    let n = dungeon[0].length
    let dp = new Array(m)
    for(let i=0; i<m; i++){
        dp[i] = new Array(n)
    }
    dp[m-1][n-1] = Math.max(1, 1-dungeon[m-1][n-1]);
    for(let i=m-1; i>=0; i--){
        for(let j=n-1; j>=0; j--){
            if(i===m-1&&j===n-1){
                continue;
            }else if(i===m-1){
                dp[i][j] = Math.max(1, dp[i][j+1]-dungeon[i][j])
            }else if(j===n-1){
                dp[i][j] = Math.max(1, dp[i+1][j]-dungeon[i][j])
            }else{
                dp[i][j] = Math.max(1, Math.min(dp[i][j+1], dp[i+1][j])-dungeon[i][j])
            }
        }
    }

    return dp[0][0]
};