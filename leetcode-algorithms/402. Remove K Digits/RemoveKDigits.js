/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 * 解題概念:
 * 使用Stack輔助，for loop看一遍字串num的每一個數字,
 * 當目前看到的數字比Stack最後的數字小, 就把Stack最後的的數字移除
 * 舉例來說, 當我們看一組數字"21", 並只能移除一個位元時, 把"2"移除的結果會比移除"1"好,
 * 因為"2"和"1"都掉到個位數位元時, "1"會比"2"小, 以這樣的概念逐漸減少digit
 * 最後如果k還沒用完, 我們從Stack的尾端刪除字元,
 * 因為stack內的字元已經是由小至大排列, 最大的會在尾端
 */
var removeKdigits = function(num, k) {
    if(num.length===k){
        return "0";
    }

    let stack = [];

    for(let n of num){
        while(stack.length>0 && k>0 && +stack[stack.length-1] > +n){
            stack.pop();
            k--;
        }
        if(stack.length==0){
            if(n==='0'){
                continue;
            }
        }
        stack.push(n)
    }
    while(k>0){
        stack.pop();
        k--;
    }
    return stack.length?stack.join(""):'0';
};