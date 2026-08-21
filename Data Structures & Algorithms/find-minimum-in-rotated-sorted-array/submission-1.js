class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0,
            r = nums.length - 1;
        while (l < r) {
            if (nums[r] > nums[l]) return nums[l];
            let mid = Math.floor((r + l) / 2);

            if (nums[mid] < nums[l]) {
                r = mid;
            } else l = mid + 1;
        }
        return nums[l];
    }
}
