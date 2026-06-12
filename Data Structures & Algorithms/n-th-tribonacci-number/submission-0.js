class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        const cache = {};
        function getResult(num){
            if(num in cache) return cache[num];
            if(num === 1 || num === 2) return 1;
            if(num === 0) return 0;
            cache[num] =  getResult(num-1) +  getResult(num-2) + getResult(num-3);
            return cache[num];
        }

        return getResult(n);
    }
}
