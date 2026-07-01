class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];
        let stack = [];
        function findCombination(i, sum){
            if(i >= nums.length || sum > target) return;
            if(sum === target){
                res.push([...stack]);
                return;
            }
            // Option 1: Include the current element and stay at the same index
            stack.push(nums[i]);
            findCombination(i, sum + nums[i]);
            // Option 2: Skip the current element and move to the next index
            stack.pop();
            findCombination(i + 1, sum);
        }
        findCombination(0, 0, [])

        return res;
    }
}