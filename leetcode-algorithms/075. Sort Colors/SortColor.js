/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 解題: in-place sort, 選擇不多, 所以用bubble sort
 *      in-place sort: bubble, selection, insert, heap sort.
 */
var sortColors = function(nums) {
    let flag = true;

    while(flag){
        flag = false;
        for(let i=1;i<nums.length;i++){
            if(nums[i-1]>nums[i]){
                flag = true;
                let tmp = nums[i-1];
                nums[i-1] = nums[i];
                nums[i] = tmp;
            }
        }
    }
};