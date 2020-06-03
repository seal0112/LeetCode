/**
 * @param {number[][]} costs
 * @return {number}
 * 解題概念: 先找出每個人(costs[i])去A以及B的距離差,
 * 距離差負值越大代表去A的成本比去B低越多
 * 然後排序每個人去A及B的差值, 前半部的人去A, 後半部的人去B, 這樣可以達到最省成本
 */
var twoCitySchedCost = function(costs) {
    let nPerson = costs.length/2;
    let result = 0;
    let diff = costs.map((c,idx) => {
        return {idx, 'cost':c[0]-c[1]}
    })
    diff.sort((a,b)=>a.cost-b.cost)


    for(let i=0; i<diff.length; i++){
        if(i<nPerson){
            result+=costs[diff[i]['idx']][0]
        }else{
            result+=costs[diff[i]['idx']][1]
        }
    }

    return result;
};