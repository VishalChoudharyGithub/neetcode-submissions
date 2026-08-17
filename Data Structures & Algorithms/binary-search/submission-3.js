class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        function searchIndex(st,ed){
            if(st > ed) return -1;
            const mid = Math.floor(st + (ed-st)/2);
            if(nums[mid] === target) return mid;
            if(nums[mid] > target){
                return searchIndex(st, mid-1);
            }else{
                return searchIndex(mid+1,ed);
            }
        }

        return searchIndex(0,nums.length-1);
    }
}
