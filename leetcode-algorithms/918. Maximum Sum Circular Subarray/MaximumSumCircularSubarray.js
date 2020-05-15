/**
 * @param {number[]} A
 * @return {number}
 * 解題:
 * 這題是53. Maximum Subarray的變形題
 * 可以想成答案的形成有兩種情況
 *     1. array中間的某一段sub array就含有最大和
 *     2. 最大和是由array的頭跟尾各取一段組合
 * 情況2我們可以想成, 整個array的中間拿掉一段數值加總負最多的sub array,
 * 剩下的頭尾兩段加總會形成最大的和
 * 因此我們使用Maximum Subarray計算情況1的值(max), 同時計算出array的加總(sum),
 * 再找出array裡加總負值最大的一段(min),
 * 另外, 避免整個array裡面的值都是負的,
 * 所以在最後也比較 sum-min===0 來確認min的組成不會剛好是整個array
 * 最後由 max 跟 (sum-min) 選出較大者回傳
 */
var maxSubarraySumCircular = function(A) {
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    let count = 0;
    const aLen = A.length;
    for(let i=0; i<aLen; i++){
        sum += A[i];
        count+=A[i];
        if(count>max){
            max = count;
        }
        if(count<0){
            max = Math.max(max, count);
            count = 0;
        }
    }
    count = 0;
    for(let j=0; j<aLen; j++){
        count+=A[j];
        if(count<min){
            min = count;
        }
        if(count>0){
            min = Math.min(min, count);
            count=0;
        }
    }
    if(sum-min===0){
        return max
    }else{
        return max>(sum-min)?max:(sum-min)
    }
};