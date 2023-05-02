/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 解題: candidates裡面的數字組合出target, 由於是組合, 所以會有重複算的問題
 *      用遞迴的方式減少target, 往下遞迴的時候candidate只會有>=自己的數字, 這樣可以避免有重複組合
 */
var combinationSum = function(candidates, target) {
    let result = [];
    candidates.sort((a,b)=>a-b)
    function dfs(candi, t, ans){
        if(t===0){
            result.push(ans);
            return
        }
        for(let i in candi){
            if(candi[i]<=t){
                dfs(candi.slice(i), t-candi[i], ans.concat([candi[i]]))
            }else{
                break
            }
        }
    }
    dfs(candidates, target, [])

    return result
};