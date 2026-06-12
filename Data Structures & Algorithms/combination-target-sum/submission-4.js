class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];
        let curr = [];
        nums.sort((a,b)=> a-b);
        function getSum(index,sum){
            if(sum === target){
                res.push([...curr]);
                return;
            } 

            for(let i = index; i< nums.length;i++){
                if(sum + nums[i] > target) return;
                curr.push(nums[i]);
                getSum(i, sum + nums[i]);
                curr.pop(nums[i]);
            }
        }

        getSum(0,0);
        return res;
    }
}
