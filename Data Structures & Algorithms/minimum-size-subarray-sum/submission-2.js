class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let length = Infinity;
        let sum = 0;
        for(let l = 0, r= 0;r<nums.length;r++){
            sum += nums[r];
            while(sum >= target){
                length = Math.min(length,r-l + 1);
                sum -= nums[l++];
            }
        }
        return length === Infinity  ? 0: length;
    }
}
