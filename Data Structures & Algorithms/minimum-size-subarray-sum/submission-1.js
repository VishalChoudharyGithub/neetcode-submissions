class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let length = 0;
        let localLength = 0;
        let sum = 0;
        for(let l = 0, r= 0;r<nums.length;r++){
            sum += nums[r];
            localLength++;
            while(sum >= target){
                length = length  !== 0 ? Math.min(length,localLength): localLength;
                sum -= nums[l++];
                localLength--;
            }
        }
        return length;
    }
}
