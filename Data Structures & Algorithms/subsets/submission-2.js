class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];
        const subset= [];
        function getSubsets(i = 0){
            if(i === nums.length) {
                result.push([...subset]);
                return;
            } 
            subset.push(nums[i]);
            getSubsets(i+1, subset);
            subset.pop();
            getSubsets(i+1, subset);
        }

        getSubsets();
        return result;
    }
}
