class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a,b)=> a-b);
        const res = [];
        const currCandidates = [];

        function calculate(sum,index){
            if(sum === target){
                res.push([...currCandidates]);
                return;
            }

            for(let i = index;i< candidates.length;i++){
                if(i > index && candidates[i] === candidates[i-1]) continue;
                if(sum + candidates[i] > target) return;

                currCandidates.push(candidates[i]);
                calculate(sum + candidates[i], i+1);

                currCandidates.pop();

            }
        }

        calculate(0,0);
        return res;
    }
}
