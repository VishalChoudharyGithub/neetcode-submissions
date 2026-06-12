class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let currentSum = 0;
        let res = 0;
        const sumNotebook = new Map();
        for(let num of nums){
            currentSum += num;
            if(currentSum === k) res++;
            if(sumNotebook.has(currentSum-k)) res += sumNotebook.get(currentSum - k);
            if(sumNotebook.has(currentSum)) sumNotebook.set(currentSum,sumNotebook.get(currentSum) + 1);
            else sumNotebook.set(currentSum,1)
        }
        return res;
    }
}
