class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let r = 0, b = nums.length-1, i = 0;
        while(i <= b){
            if(nums[i] === 0){
                this.swap(r,i, nums);
                r++;
                i++;
            } else if(nums[i] === 2){
                this.swap(i, b,nums);
                b--;
            } else {
                i++;
            }
        }

    }
    swap(i, j , nums){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}