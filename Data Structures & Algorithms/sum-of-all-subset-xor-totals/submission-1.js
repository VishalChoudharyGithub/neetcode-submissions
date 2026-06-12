class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        let sum = 0;
        let subset = [];
        function process(i){
            if(i === nums.length){
                sum += [...subset].reduce((a, val)=> a^val,0);   
                return;
            }

            subset.push(nums[i]);
            process(i+1);
            subset.pop();
            process(i+1);
        }

        process(0);
        return sum;
    }

}
