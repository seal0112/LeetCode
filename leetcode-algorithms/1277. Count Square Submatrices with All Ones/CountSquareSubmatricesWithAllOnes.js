/**
 * @param {number[][]} matrix
 * @return {number}
 * 解題概念: 使用DP(動態規劃)
 * 對任意一點 x, 如果值是0, 那肯定沒辦法建構出合理的正方形
 * 如果 x 的值是1時, 先看它能建構出的所有格子都是1的最大正方形邊長是多少
 * 這個最大的邊長取决於x的左邊一格, 上面一格, 以及左上方一格能夠建構出的正方形的最大邊長,
 * 三個邊長的最小值加x自己的1就是x這格能建構出的最大邊長
 * 1 1 1 1
 * 1 0 b c
 * 1 1 a x
 * 上圖來說, 假設a, b, c三個值皆為 1,
 * 那這三個點能建構出的最大邊長正方形分別為 a = 1, b=1, c=2,
 * a與b要建構出邊長為2的正方形時, 因為需要的位子內有1個0, 所以只能建構出最大邊長為1的正方形
 * 對x點來說, 如果要做出邊長為2的正方形是可以的,
 * 因為a, b, c三點都可以做出邊長為1的正方形, 加上自己就可以做出邊長為2的正方形
 * 若要做出邊長為3的正方形, 因為a, b無法做出來, 所以x就無法擴張成邊成為3的正方形
 * 因此這題的結果由左至右, 由上至下逐一檢查包含每個點, 然後往左上方擴展能做出的正方形邊長
 * 加總後就是答案
 */
var countSquares = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let dp = new Array(n)
    for(let i=0; i<n; i++){
        dp[i] = new Array(m)
    }

    let result = 0;

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            dp[i][j] = matrix[i][j]
            if(i>0 && j>0 && dp[i][j]===1){
                dp[i][j] += Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])
            }
            result += dp[i][j];
        }
    }

    return result
};
