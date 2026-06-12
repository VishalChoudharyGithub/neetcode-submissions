class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = new Array(2* nums.length);
        for(let i = 0; i< nums.length;i++){
            ans[i] = nums[i];
            ans[nums.length+i] = nums[i];
        }
        return ans;
    }
}
