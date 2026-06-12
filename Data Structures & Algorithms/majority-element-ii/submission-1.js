class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // majorityElement(nums) {
    //    const notebook = {};
    //    const res = new Set();
    //    nums.forEach(num=>{
    //     notebook[num] = (notebook[num] || 0) + 1;
    //     if(!res.has(num) && notebook[num]> nums.length/3){
    //         res.add(num);
    //     }
    //    }) 
    //    return [...res];
    // }

    majorityElement(nums) {
        const brain = new Map();
        for (let num of nums){
            if(brain.has(num)){
                brain.set(num,brain.get(num) + 1);
            }
            else if (brain.size <2){
                brain.set(num,1)
            }else {
                for (let key of brain.keys()) {
                    brain.set(key, brain.get(key) - 1);
                    if (brain.get(key) <= 0) brain.delete(key);
                }
            }
        }
        return [...brain.keys()].filter(key => nums.filter(num => num === key).length > nums.length / 3);


    }
    
    
}
