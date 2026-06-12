class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const cache = {};
        function getTotalCoins(sum){
            if(sum in cache) return cache[sum];
            if(sum === amount) return 0;
            if(sum > amount)return Infinity;

            let res = Infinity;
            for (let coin of coins) {
                res = Math.min(res, 1 + getTotalCoins(sum + coin));
            }
            cache[sum] = res;
            return cache[sum];
        }

        const minCoins = getTotalCoins(0);
        return minCoins === Infinity ? -1 : minCoins;


    }
}
