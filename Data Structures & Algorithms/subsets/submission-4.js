class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {

        // I'll store every subset here.
        const result = [];

        // This represents the subset I'm currently building.
        const current = [];

        // "start" tells me which elements I'm allowed
        // to choose next.
        function backtrack(start) {

            // Whatever I've built so far is already
            // one valid subset.
            result.push([...current]);

            // Let me try adding every remaining element.
            for (let i = start; i < nums.length; i++) {

                // I'll choose this element.
                current.push(nums[i]);

                // Now let me build subsets
                // starting from the next index.
                backtrack(i + 1);

                // I'm done exploring every subset
                // containing this element here.
                // Time to undo my choice.
                current.pop();
            }
        }

        // Start with an empty subset.
        backtrack(0);

        return result;
    }
}