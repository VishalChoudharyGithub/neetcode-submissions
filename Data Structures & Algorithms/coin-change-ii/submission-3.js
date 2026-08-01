class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const cache = {};
        function getTotalCombinations(i, total){
            const key = `${i}-${total}`;
            if(total === amount) return 1;
            if(cache[key] !== undefined) return cache[key];
            if(total > amount || i === coins.length) return 0;

            cache[key] =  getTotalCombinations(i, total + coins[i]) + getTotalCombinations(i + 1, total);
            return cache[key];
        }

        return getTotalCombinations(0,0);
    }
}
