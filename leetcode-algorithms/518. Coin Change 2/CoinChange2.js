/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 * 解題: 用coins裡面的錢幣組成amount, 能有多少種組合
 *      DP題, 用一個array紀錄每個錢幣從1到amount能有幾種組合
 *      每次coin把目前的index-coin自己所指到的arr值加到目前的array[index]裡面
 *      ex. coin: 1, 由1組成0到5的話分別是 [1,1,1,1,1,1], 都各有一種組合
 *          coin: 2, 由2跟1組成,         [1,1,2,2,3,3],
 *                   index 2可以由2自己組成, 所以可以是一個2, 或是由1組成的1,1
 *                   index 3可以由一個2跟一個1組成,
 *                         4的話可以1,1,1,1 or 1,1,2 or 2,2
 *                   後面以此類推
 */
var change = function(amount, coins) {
    let total = new Array(amount+1);
    total.fill(0);
    total[0] = 1;
    for(let c in coins){
        for(let i=coins[c]; i<=amount; i++) {
            total[i] += total[i-coins[c]]
        }
    }

    return total[amount]
};