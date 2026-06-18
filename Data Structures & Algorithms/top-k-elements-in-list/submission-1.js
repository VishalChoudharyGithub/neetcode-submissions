class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counter = {};
        nums.forEach(num=>{
            counter[num] = (counter[num] || 0) + 1;
        });

        const sortedFrequencies = Object.entries(counter).sort(([num1,count1],[num2,count2]) => count2 - count1);
        const res = [];
        let i = 0;
        while(i<k){
            res.push(Number(sortedFrequencies[i][0]));
            i++;
        }

        return res;
    }
}