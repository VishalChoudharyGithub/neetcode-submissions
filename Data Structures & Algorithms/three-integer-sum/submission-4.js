class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b);
        //[-1,0,0,1]
        const res= [];
        for(let i =0;i<nums.length-2;i++){
            if (nums[i] > 0) break;
             if (i > 0 && nums[i] === nums[i - 1]) continue;
            let j = i+1, k = nums.length-1;
            while(j<k){
                const sum = nums[i] + nums[j] + nums[k];
                if(sum === 0){
                    res.push([nums[i],nums[j], nums[k]]);
                    while(j < k && nums[j] === nums[j+1]){
                        j+=1;
                    }
                    j++;
                } 
                else if(sum> 0) k--;
                else j++;
            }
        }
        return res;
    }
}