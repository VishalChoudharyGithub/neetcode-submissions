class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const lowerBound = 1;
        const upperBound = nums.length;
        for(let i = 0;i<nums.length;i++){
            if(nums[i]< 0) nums[i] = 0;
        }
        for(let i = 0;i<nums.length;i++){
            const originalVal = Math.abs(nums[i]);
            if(originalVal < lowerBound || originalVal> upperBound) continue;
            const targettedIndex = originalVal-1;
            nums[targettedIndex] = (nums[targettedIndex] === 0 ? nums.length + 1 :Math.abs(nums[targettedIndex])) * -1;
        }
        for(let i = 1;i<=nums.length;i++){
            if(nums[i-1] >= 0) return i;
        }
        return nums.length + 1;
    }
}
