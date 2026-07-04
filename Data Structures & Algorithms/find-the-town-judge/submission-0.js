class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        const scores = new Array(n+1).fill(0);
        for(let [p1,p2] of trust){
            scores[p1] -= 1;
            scores[p2] += 1;
        }

        for(let i = 1 ; i< n+1;i++){
            if(scores[i]  === n-1) return i;
        }

        return -1;
    }
}
