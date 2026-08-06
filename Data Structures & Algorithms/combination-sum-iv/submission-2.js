class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    combinationSum4(nums, target) {
        let memo = new Map();
        function getCount(sum){
            if( sum === target) return 1;
            if(sum > target) return 0;
            if(memo.has(sum)) return memo.get(sum);

            let count = 0;
            for(let j = 0; j< nums.length;j++){
                count += getCount(sum + nums[j]);
            }
            memo.set(sum, count);
            return count;
        }

        return getCount(0);
    }
}
