class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const effectiveSteps = k % nums.length;
        if(effectiveSteps === 0) return nums;
        let placed = 0;
        for(let i = 0 ; placed < nums.length;i++){
            let j = i;
            let prev = nums[j];
            do{
                const newPosition = (j + effectiveSteps) % nums.length;
                let nextElement = nums[newPosition];
                nums[newPosition] = prev;
                j = newPosition;
                prev = nextElement;
                placed++;
            }while(j !== i);
        }

    }
}
