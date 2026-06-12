class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = [nums[0],0];
        for(let num of nums){
            if(count[0] === num) ++count[1];
            else count[1] = count[1]-1;
            if(count[1] < 0) count[0] = num;
        }
        return count[0];
    }
}
