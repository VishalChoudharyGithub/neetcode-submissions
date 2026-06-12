class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let cache = {};
        function getTotalWays(position){
            if(position === n) return 1;
            if(position > n) return 0;
            if(position in cache){
                return cache[position];
            }
            cache[position] =  getTotalWays(position+1) + getTotalWays(position+2);
            return cache[position];
        }

        return getTotalWays(1) + getTotalWays(2);
    }
}
