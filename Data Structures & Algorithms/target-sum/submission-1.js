class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const cache = {};
        function getNumOfWays(sum, i) {
            const key = `${i},${sum}`;
            if(cache[key] !== undefined) return cache[key];
            if (i === nums.length){
                if(sum === target) return 1;
                else return 0;
            }

            cache[key] =  getNumOfWays(sum - nums[i], i + 1) + getNumOfWays(sum + nums[i], i + 1);
            return cache[key];
        }
        return getNumOfWays(0, 0);
    }
}
