class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((c1, c2) => c1 - c2);
        const res = [];
        let stack = [];
        function backtrack(i, remaining) {
            if (remaining === 0) {
                res.push([...stack]);
                return;
            }

            for (let j = i; j < candidates.length; j++) {
                if(j > i && candidates[j] === candidates[j-1]) continue;
                if (candidates[j] > remaining) break;

                stack.push(candidates[j]);
                backtrack(j + 1, remaining - candidates[j]);
                stack.pop();
            }
        }

        backtrack(0, target);
        return res;
    }
}
