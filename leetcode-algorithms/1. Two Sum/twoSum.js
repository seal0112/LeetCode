/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    let aMap = new Map();

    for(let i in nums){
        if(aMap.has(target- nums[i])){
            return [aMap.get(target- nums[i]),+i];
        }
        aMap.set(nums[i],+i);
    }

    return result;
};