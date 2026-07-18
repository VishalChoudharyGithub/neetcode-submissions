class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const cache = {};
        function maxRob(i){
            if(i >= nums.length) return 0;
            if(cache[i]) return cache[i];
            cache[i] = Math.max(maxRob(i+1), nums[i] + maxRob(i+2));
            return cache[i];
        }

        return maxRob(0);
    }
}
