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
                let temp = nums[end];
                nums[end] = nums[start];
                nums[start] = temp;
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
