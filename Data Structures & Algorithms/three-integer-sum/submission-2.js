class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // threeSum(nums) {
    //     nums.sort((a,b)=> a-b);
    //     const notebook = {};
    //     nums.forEach((num,index)=>{
    //         if(!notebook[-num]){
    //             notebook[-num] = [];
    //         }
    //         notebook[-num].push(index);
    //     });

    //     const solutionSet = new Set();
    //     const res = [];

    //     for(let i = 0; i< nums.length;i++){
    //         for(let j = 2; j<nums.length;j++){
    //             const sum = nums[i] + nums[j];
    //             if(notebook[sum]){
    //                 notebook[sum].forEach((index)=>{
    //                     if(i<index && index < j){
    //                         const solutionKey = `${nums[i]}${nums[index]}${nums[j]}}`;
    //                         if(!solutionSet.has(solutionKey)){
    //                             solutionSet.add(solutionKey);
    //                             res.push([nums[i],nums[index],nums[j]]);
    //                         }
    //                     }
    //                 })
    //             }
    //         }
    //     }
    //     return res;
    // }

    threeSum(nums) {
        nums.sort((a,b)=> a-b);
        const res=[];
        for(let i = 0;i <= nums.length-3;i++){
            if(i > 0 && nums[i] === nums[i-1]) continue;
            let j = i+1, k = nums.length-1;
            while(j<k){
                const sum = nums[i]+nums[j]+nums[k];
                if(sum === 0) {
                    res.push([nums[i],nums[j],nums[k]]);
                    j++;
                    while (j < k && nums[j] === nums[j - 1]) j++;
                }
                else if(sum > 0) k--;
                else j++;

            }
        }
        return res;
    }
}
