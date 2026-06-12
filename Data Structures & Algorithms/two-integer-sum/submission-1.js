class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const trackMap = new Map();
        for(let [index,value] of nums.entries()){
            const neededValue = target-value;
            if(trackMap.has(neededValue)) return [trackMap.get(neededValue),index];
            trackMap.set(value,index);
        }
        return [0,0];
    }
}
