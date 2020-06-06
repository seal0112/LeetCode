/**
 * @param {number[][]} people
 * @return {number[][]}
 * 解題: [h, k] h代表高度, k代表排在這個前面有多少人比他高, eg. [[5,0], [4,1]]
 *      5比4高, 4的k值是1, 所以這個array符合題目的要求
 * 解法: 先排序array, h由高至低排序, 這樣可以確保矮的塞進去前能看到比它高的有多少
 *                  k由低至高排序, 這樣可以確保塞入到任何人, 前面的都比自己高, 方便找位置
 *      然後再根據每個人的k值找要塞到哪個位置
 */
var reconstructQueue = function(people) {
    if (!people) return [];

    let p = people.sort( (a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
    let res = [];

    for (let i in p) {
        res.splice(p[i][1], 0, p[i])
    }

    return res;
};