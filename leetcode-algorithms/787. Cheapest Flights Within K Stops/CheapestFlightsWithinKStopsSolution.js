/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 * 解題: 用Bellman-Ford演算法, 因為有限定只能經過k個點
 *      也可以用dfs或bfs
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    let cost = new Array(n).fill(Number.MAX_VALUE)
    cost[src] = 0;

    for(let i=0; i<K+1; i++){
        let tmp = cost.slice()
        for(let f of flights){
            tmp[f[1]] = Math.min(tmp[f[1]], cost[f[0]] + f[2])
        }
        cost = tmp
    }

    return cost[dst]>=Number.MAX_VALUE?-1:cost[dst]
};