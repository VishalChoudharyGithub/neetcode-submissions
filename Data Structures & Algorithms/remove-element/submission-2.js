class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let i = 0, j = nums.length-1;
        while(i<=j){
           if(nums[i] === val){
                nums[i] = nums[j--];
           }else i++;
        }
        return j+1;
    }
}
