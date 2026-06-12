class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let l = 0;
        let r = 0;
        let totalJumps = 0;
        let farMost = nums[0];
        while(r < nums.length-1){
            while(l<=r){
                farMost = Math.max(farMost,l+nums[l]);
                l++;
            }
            totalJumps++;
            r = farMost;
        }

        return totalJumps;
    }

}
