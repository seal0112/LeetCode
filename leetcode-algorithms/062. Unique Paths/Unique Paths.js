/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 解題概念: DP題, 走到 [m][n] 必然會經過 [m-1][n] 和 [m][n-1]
 *          所以我們用一個二維的array(m, n)紀錄走到每個點的走法
 *          最後回傳arr[m-1][n-1]即是答案
 *         這題也可以用數學解法,想像共有 m-1個 right以及 n-1個down
 *         然後我們要用 right 和 down 共 m+n-2 來做排列 可以用排列公式導出 (m+n-2)!/(m-1)!(n-1)!
 *         然後用程式算這數字出來
 */
var uniquePaths = function(m, n) {
    if(m===1||n===1){
        return 1;
    }

    let arr = new Array(m);
    for(let idx=0; idx<m; idx++){
        arr[idx] = new Array(n).fill(1)
    }
    for(let i=1; i<m; i++){
        for(let j=1; j<n; j++){
            arr[i][j] = arr[i-1][j]+arr[i][j-1]
        }
    }
    return arr[m-1][n-1]
};