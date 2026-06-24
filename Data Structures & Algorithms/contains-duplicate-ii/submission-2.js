class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const cache = {};
        for(let i = nums.length-1; i>=0 ;i--){
            cache[nums[i]] = (cache[nums[i]] || []);
            cache[nums[i]].push(i);
        }

        for(let entry of Object.values(cache)){
            let l = 0, r = entry.length-1;
            while(l<r){
                let subtraction = entry[l] - entry[r];
                if(subtraction <= k) return true;
                else r--;
            }
        }
        return false;
    }
}
// 3 2 0
