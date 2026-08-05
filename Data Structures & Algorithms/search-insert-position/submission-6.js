class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        function getPosition(l,r){
            if(l > r) return l;
            if(r < 0) return l;
            const mid = l + Math.floor((r-l)/2);
            if(nums[mid] === target) return mid;

            if(nums[mid] > target) return getPosition(l,mid-1);
            return getPosition(mid+1,r);
        }
        return getPosition(0, nums.length-1);
    }
}
