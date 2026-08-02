class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        function getNumOfWays(sum, i) {
            if (i === nums.length){
                if(sum === target) return 1;
                else return 0;
            }

            return getNumOfWays(sum - nums[i], i + 1) + getNumOfWays(sum + nums[i], i + 1);
        }
        return getNumOfWays(0, 0);
    }
}
