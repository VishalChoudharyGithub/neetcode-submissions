class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
    function find(l, r) {
        if (l > r) return l;

        let mid = Math.floor((l + r) / 2);

        if (nums[mid] === target) return mid;
        if (nums[mid] < target) return find(mid + 1, r);
        else return find(l, mid - 1);
    }

    return find(0, nums.length - 1);
}

}
