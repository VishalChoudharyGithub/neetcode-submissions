class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        k = k % nums.length;
        reverse(0, nums.length-1);
        reverse(0, k -1 );
        reverse(k, nums.length-1);

        function reverse(startIndex, endIndex){
            while(startIndex < endIndex){
               [nums[startIndex], nums[endIndex]] = [nums[endIndex], nums[startIndex]];
               startIndex++;
               endIndex--;
            }
        }
        
    }
}


// [1,2,3,4,5,6,7] => 2   => [7, 6, 5, 4, 3, 2, 1] => []