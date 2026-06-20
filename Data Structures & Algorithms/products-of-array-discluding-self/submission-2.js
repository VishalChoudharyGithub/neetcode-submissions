class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        const res = new Array(len).fill(1);

        for(let i = 1; i< len;i++){
            res[i] = res[i-1] * nums[i-1];
        }

        let postPrefix = nums[len-1];
        for(let i = len-2; i>=0;i--){
            res[i] = res[i] * postPrefix;
            postPrefix *= nums[i];
        }


        return res;
    }
}
