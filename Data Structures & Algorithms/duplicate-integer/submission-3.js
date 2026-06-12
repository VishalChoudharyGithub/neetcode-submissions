class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    //N*2 approach
    // hasDuplicate(nums) {
    //     for(let i = 0;i<nums.length;i++){
    //         for(let j = i+1;j<nums.length;j++){
    //             if(nums[i] === nums[j]) return true;
    //         }
    //     } 
    //     return false;
    // }
    hasDuplicate(nums) {
        nums.sort();
        for(let i = 1; i<nums.length;i++){
            if(nums[i-1] === nums[i]){
                return true;
            }
        }
        return false;
    }
}
