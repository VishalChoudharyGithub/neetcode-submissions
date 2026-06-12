class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];
        let curr = [];
        function getSum(index,sum){
            if(sum > target) return ;
            if(sum === target){
                res.push([...curr]);
                return;
            } 

            for(let i = index; i< nums.length;i++){
                curr.push(nums[i]);
                getSum(i, sum + nums[i]);
                curr.pop(nums[i]);
            }
        }

        getSum(0,0);
        return res;
    }
}
