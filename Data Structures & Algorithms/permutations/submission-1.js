class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {

        // I'll store all the permutations here.
        const result = [];

        // This represents the permutation I'm currently building.
        const current = [];

        // Hmm... I need a way to remember which numbers
        // I've already used in the current permutation.
        const used = new Array(nums.length).fill(false);

        // Let me write a recursive function.
        // Every recursive call will fill one more position
        // in the current permutation.
        function backtrack() {

            // Nice! If I've picked exactly n numbers,
            // I've completed one permutation.
            if (current.length === nums.length) {
                result.push([...current]);
                return;
            }

            // Let me try placing every number
            // in the current position.
            for (let i = 0; i < nums.length; i++) {

                // Wait... I've already used this number
                // in the current permutation.
                // I can't use it again.
                if (used[i]) {
                    continue;
                }

                // Let me mark this number as used.
                used[i] = true;

                // I'll place it in the current permutation.
                current.push(nums[i]);

                // Great! Now let me fill the next position.
                backtrack();

                // I'm done exploring every permutation
                // that starts with this choice.
                // Time to undo everything.

                current.pop();

                used[i] = false;
            }
        }

        // Let's begin with an empty permutation.
        backtrack();

        return result;
    }
}