class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let red = 0, current = 0 , blue = nums.length-1;
        while(current<= blue){
            if(nums[current] === 0){
                nums[current] = nums[red];
                nums[red] = 0;
                red++;
                current++;
            }
            else if(nums[current] ===2 ){
                nums[current] = nums[blue];
                nums[blue] = 2;
                blue--;
            }
            else current++;
        }
    }
}

//  0 0 0 1 1 2
