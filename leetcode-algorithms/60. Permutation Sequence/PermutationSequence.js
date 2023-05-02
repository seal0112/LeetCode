/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 * 解題概念: 當有n個數字, 每個數字當開頭, 後面還有(n-1)!組合
 *          ex. n==4, 1開頭的話後面還有3*2*1種組合
 *                    2開頭的話...以此類推
 *          我們先用一個array nums來記錄還有沒給到答案的數字
 *         先arr 計算每種長度的數字有多少種組合,
 *         然後再用k/arr[n-result.length]來找出應該加入result的數字(程式裡面用k-1因為index從0開始)
 */
var getPermutation = function(n, k) {
    let arr = new Array(n);
    arr[0] = 1;
    for(let i=1; i<n; i++){
        arr[i] = arr[i-1]*(i+1);
    }
    let nums = new Array(n).fill(0).map((e, idx) => +idx+1)
    let count = 1;
    let result = ""
    while(count<=n && k>1){
        let num = Math.floor((k-1)/arr[n-count-1])
        k = ((k-1)%arr[n-count-1])+1
        result+=nums[num]
        nums.splice(num, 1)
        count++;
    }
    return result+nums.join("")
};