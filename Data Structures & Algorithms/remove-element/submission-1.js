class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let start = 0, end = nums.length-1;
        let res = 0;
        while(start <= end){
            if(nums[start] === val){
                nums[start] = nums[end];
                end--;
            }
            else{
                res++;
                start++;
            }
        }
        return res;
    }
}
