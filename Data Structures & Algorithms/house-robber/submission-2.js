class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 1) return nums[0];
        const notebook = {};
        function getChoriKaMaal(houseNumber){
            if(houseNumber in notebook) return notebook[houseNumber];
            if(houseNumber >= nums.length) return 0;

            notebook[houseNumber] =  Math.max(nums[houseNumber] + getChoriKaMaal(houseNumber+2), getChoriKaMaal(houseNumber+1));
            return notebook[houseNumber];
        }

        return Math.max(getChoriKaMaal(0),getChoriKaMaal(1));
    }
}
