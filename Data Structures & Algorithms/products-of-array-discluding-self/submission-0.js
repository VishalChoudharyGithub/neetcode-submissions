class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const preMultiples = new Array(nums.length).fill(1);
        for(let i = 1; i<nums.length;i++){
            preMultiples[i] = nums[i-1] * preMultiples[i-1];
        }
        const postMultiples = new Array(nums.length).fill(1);
        for(let i = nums.length-2;i>=0;i--){
            postMultiples[i] = nums[i+1] * postMultiples[i+1];
        }

        const result = [];
        for(let i = 0 ;i<nums.length;i++){
            result.push(preMultiples[i] * postMultiples[i]);
        }
        return result;
    }
}
