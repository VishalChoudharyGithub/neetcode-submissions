class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {

        // First, let me sort the numbers.
        // If a number becomes larger than the remaining target,
        // I can stop checking further because everything after it
        // will also be larger.
        nums.sort((a, b) => a - b);

        // I'll store all valid combinations here.
        const result = [];

        // This will hold the current combination I'm building.
        const current = [];

        // Let me create a recursive function.
        // "start" tells me where I can start picking numbers.
        // "remaining" tells me how much target is left.
        const backtrack = (start, remaining) => {

            // Perfect! If nothing is remaining,
            // I've found one valid combination.
            if (remaining === 0) {
                result.push([...current]);
                return;
            }

            // I'll try every candidate starting from "start".
            // Starting from the same index allows me to reuse
            // the current number multiple times.
            for (let i = start; i < nums.length; i++) {

                // Since the array is sorted,
                // if this number is already too large,
                // every number after it will also be too large.
                // No need to continue.
                if (nums[i] > remaining) {
                    break;
                }

                // Let me choose this number.
                current.push(nums[i]);

                // I've used this number,
                // so I'll reduce the remaining target.
                // I pass "i" again because this number
                // can be chosen multiple times.
                backtrack(i, remaining - nums[i]);

                // I'm done exploring this path.
                // Let me undo my last choice and try the next number.
                current.pop();
            }
        };

        // Let's start from index 0 with the complete target.
        backtrack(0, target);

        // All valid combinations are ready.
        return result;
    }
}
