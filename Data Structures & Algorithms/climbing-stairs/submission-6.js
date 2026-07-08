class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const cache = new Map();
        function getCount(step){
            if(step>n) return 0;
            if(step === n) return 1;
            if(cache.has(step)) return cache.get(step);
            const count =  getCount(step+1)+ getCount(step+2);
            cache.set(step,count);
            return count;
        }

        return getCount(1)+ getCount(2);
    }
}
