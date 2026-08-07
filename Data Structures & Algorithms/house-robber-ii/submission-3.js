class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];

        function getMaxProfit(i, end, cache = {}){
            if( i > end) return 0;
            if(cache[i] !== undefined) return cache[i];
            cache[i] =  Math.max(nums[i] + getMaxProfit(i+2, end, cache),  getMaxProfit(i+1, end, cache));
            return cache[i];
        }
        return Math.max(getMaxProfit(0, nums.length - 2),  getMaxProfit(1, nums.length - 1));
    }
}