class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];
        let stack = [];
        function backtrack(i){
            if(i === nums.length){
                res.push([...stack]);
                return;
            }
            stack.push(nums[i]);
            backtrack(i+1);
            stack.pop();
            backtrack(i+1);
        }

        backtrack(0);
        return res;
    }
}
