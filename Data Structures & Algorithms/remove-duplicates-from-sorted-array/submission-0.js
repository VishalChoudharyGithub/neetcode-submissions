class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let left = 1;
        let iterator = 1;

        while(iterator < nums.length){
            if(nums[iterator] !== nums[iterator-1]) nums[left++] = nums[iterator];
            iterator++;
        }
        return left;
    }
}
