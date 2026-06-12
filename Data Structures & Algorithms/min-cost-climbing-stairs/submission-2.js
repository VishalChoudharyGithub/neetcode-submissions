class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const cache = {};
        function getCost(step){
            if(step>= cost.length) return 0;
            if(step in cache) return cache[step];

            cache[step] =  cost[step] + Math.min(getCost(step+1),getCost(step+2));
            return cache[step];
        }

        return Math.min(getCost(0),getCost(1));
    }
}
