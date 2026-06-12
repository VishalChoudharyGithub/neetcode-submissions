class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const cache = new Set();
        for(let num of nums){
            if(cache.has(num)) return true;
            cache.add(num);
        }
        return false;
    }
}
