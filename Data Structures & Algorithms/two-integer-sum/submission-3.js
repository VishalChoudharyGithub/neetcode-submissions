class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const cache = new Map();
        for(let i = 0; i< nums.length;i++){
            if(cache.has(nums[i])){
                return [cache.get(nums[i]), i];
            }
            cache.set(target - nums[i], i);
        }
        return [0,1];
    }
}
