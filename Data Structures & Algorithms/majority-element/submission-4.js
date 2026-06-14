class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let majority = [nums[0], 0];
        for (let num of nums) {
            if (num === majority[0]) {
                majority[1] += 1;
            } else {
                majority[1] -= 1;
                if (majority[1] === 0) {
                    majority = [num, 1];
                }
            }
        }
        return majority[0];
    }
}
