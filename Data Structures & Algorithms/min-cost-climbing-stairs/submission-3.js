class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const cache = {};

        function getMinCost(i){
            if(i>= cost.length) return 0;
            if(cache[i]) return cache[i];

            cache[i] =  cost[i] + Math.min(getMinCost(i+1), getMinCost(i+2));
            return cache[i];
        }

        return Math.min(getMinCost(0), getMinCost(1));
    }
}
