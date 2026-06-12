class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
       const notebook = {};
       const res = new Set();
       nums.forEach(num=>{
        notebook[num] = (notebook[num] || 0) + 1;
        if(!res.has(num) && notebook[num]> nums.length/3){
            res.add(num);
        }
       }) 
       return [...res];
    }
    
    
}
