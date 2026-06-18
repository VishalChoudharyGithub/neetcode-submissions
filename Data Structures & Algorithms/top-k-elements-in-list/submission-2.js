class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counter = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);
        nums.forEach((num) => {
            counter[num] = (counter[num] || 0) + 1;
        });

        for (let num in counter) {
            freq[counter[num]].push(num);
        }
        const res = [];
        for (let i = freq.length - 1; i >= 0; i--) {
            for (const num of freq[i]) {
                res.push(num);
                if (res.length === k) {
                    return res;
                }

            }
        }
    }
}
