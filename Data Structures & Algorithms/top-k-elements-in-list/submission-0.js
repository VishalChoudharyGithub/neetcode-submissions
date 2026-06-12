class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const notebook = {};
        for(const val of nums){
            notebook[val] = (notebook[val] || 0) + 1;
        }

        const bucket = Array.from({length:nums.length+1},()=>[]);
        for(const [num,freq] of Object.entries(notebook)){
            bucket[freq].push(parseInt(num));
        }
        const res = [];
        for(let i = bucket.length-1; i > 0 ;i--){
            if(bucket[i].length > 0){
                for(const num of bucket[i]){
                    res.push(num);
                    if(res.length === k) return res;
                }
            }
        }
    }
}
