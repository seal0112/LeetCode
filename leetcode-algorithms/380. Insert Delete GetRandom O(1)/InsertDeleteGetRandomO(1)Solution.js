/**
 * Initialize your data structure here.
 * 解題: 做出一個類似set的data structure, 插入/刪除 時間複雜度要 Ｏ(1)
 *      基底用array,
 *      1. insert時檢查indexOf是不是-1, 確認不在array再插入
 *      2. remove用array的splice,
 *      splice(start, deleteCount, item1, item2, ...) 的效果是由start開始 刪除deleteCount個數的element,
 *      再插入item1, ...進去, 插入的個數可以自己決定, 在remove我們不用插入新的element
 *      所以用splice(start, 1)來指定位子刪除一個element
 *      3. getRandom: 隨機回傳set裡面的一個值 用array.length, Math.random, Math.flooe組合就好
 */
var RandomizedSet = function() {
    this.set = new Array()
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    let pos = this.set.indexOf(val)
    if(pos===-1){
        this.set.push(val)
        return true
    }else{
        return false
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    let pos = this.set.indexOf(val)
    if(pos>-1){
        this.set.splice(pos, 1)
        return true
    }else{
        return false
    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let len = this.set.length;
    return this.set[Math.floor(Math.random()*len)]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */