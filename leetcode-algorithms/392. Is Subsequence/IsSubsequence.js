/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 解題: s是否是t的subsequence, 用一個for迴圈跑一遍s,
 *       確認s的每個char在t的indexOf裡出現的位置都不是-1
 *       並且位置都在前一個char後面 (用preIndex+1指定)
 */
var isSubsequence = function(s, t) {
    let preIndex = -1;
    for(let S of s) {
        preIndex = t.indexOf(S, preIndex+1)
        if(preIndex===-1){
            return false
        }
    }
    return true
};