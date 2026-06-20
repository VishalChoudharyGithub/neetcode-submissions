class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        const leftProductionArr = Array.from({length:len},()=> 1);
        const rightProductionArr = Array.from({length:len},()=> 1);

        for(let i = 1, j = len-2; i<len-1, j>=0;i++,j--){
            leftProductionArr[i] = leftProductionArr[i-1]  * nums[i-1];
            rightProductionArr[j] = rightProductionArr[j+1]  * nums[j+1];
        }
        for(let i = 0; i< nums.length;i++){
            nums[i] = leftProductionArr[i] * rightProductionArr[i];
        }
        return nums;
    }
}
