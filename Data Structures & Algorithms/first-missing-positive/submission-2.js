class Solution {
    firstMissingPositive(nums) {
        const n = nums.length;
        
        // First pass: Replace negative numbers and zeros with (n+1), which is out of our interest range
        for (let i = 0; i < n; i++) {
            if (nums[i] <= 0) {
                nums[i] = n + 1;
            }
        }
        
        // Second pass: Mark present numbers by negating the value at their corresponding index
        for (let i = 0; i < n; i++) {
            const num = Math.abs(nums[i]);
            if (num <= n) {
                const index = num - 1;
                nums[index] = -Math.abs(nums[index]);
            }
        }
        
        // Third pass: Find the first index with a positive value
        for (let i = 0; i < n; i++) {
            if (nums[i] > 0) {
                return i + 1;
            }
        }
        
        // If all numbers from 1 to n are present, return n + 1
        return n + 1;
    }
}