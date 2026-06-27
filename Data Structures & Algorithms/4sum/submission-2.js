class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums.sort((a,b)=> a-b);

        let res = [];
        for(let i = 0; i < nums.length - 3; i++){
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            for (let j = nums.length - 1; j > i + 2; j--) {
                if (j < nums.length - 1 && nums[j] === nums[j + 1]) continue;
                let innerI = i + 1, innerJ = j - 1;
                while(innerI < innerJ){
                    let sum = nums[i] + nums[j] + nums[innerI] + nums[innerJ];
                    if(sum === target){
                        res.push([nums[i], nums[innerI], nums[innerJ], nums[j]]);
                        while (innerI < innerJ && nums[innerI] === nums[innerI + 1]) innerI++;
                        while (innerI < innerJ && nums[innerJ] === nums[innerJ - 1]) innerJ--;
                        innerI++;
                        innerJ--;
                    } else if(sum > target) {
                        innerJ--;
                    } else {
                        innerI++;
                    }
                }
            }
        }

        return res;
    }
}