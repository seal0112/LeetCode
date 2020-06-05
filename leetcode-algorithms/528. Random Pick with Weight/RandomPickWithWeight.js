/**
 * @param {number[]} w
 */
var Solution = function(w) {
    let tmp = []
    let weight = 0
    for(let i in w){
        weight+=w[i]
        tmp.push(weight)
    }
    this.w = tmp;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const lastIdx = this.w.length-1;
    const randomN = Math.floor(Math.random() * this.w[lastIdx]);

    let left = 0;
    let right = lastIdx;

    while (left < right){
        const mid = (left + right) >> 1;
        if (randomN >= this.w[mid]) left = mid + 1;
        else right = mid;
    }
    return left;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */