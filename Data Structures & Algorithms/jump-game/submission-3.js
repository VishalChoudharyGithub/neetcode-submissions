class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
    let farthest = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > farthest) return false; // If current index is beyond the farthest point
        farthest = Math.max(farthest, i + nums[i]); // Update the farthest point
    }
    return true; // If we exit the loop, we can reach the end
}
}
