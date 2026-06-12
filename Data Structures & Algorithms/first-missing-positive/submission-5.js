class Solution {
//     firstMissingPositive(nums) {
//         const n = nums.length;
        
//         for (let i = 0; i < n; i++) {
//             if (nums[i] <= 0) {
//                 nums[i] = n + 1;
//             }
//         }
        
//         for (let i = 0; i < n; i++) {
//             const num = Math.abs(nums[i]);
//             if (num <= n) {
//                 const index = num - 1;
//                 nums[index] = -Math.abs(nums[index]);
//             }
//         }
        
//         for (let i = 0; i < n; i++) {
//             if (nums[i] > 0) {
//                 return i + 1;
//             }
//         }
        
//         return n + 1;
//     }

// 3, 5, -1, 1
     firstMissingPositive(nums) {
        let i = 0;
        while (i < nums.length) {
            const j = nums[i] - 1;
            if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]; 
            } else {
                i++;
            }
        }
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== i + 1) return i + 1;
        }
        return nums.length + 1;
    }
}