class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let i = 1,
            boughtOn = 0;
        while (i < prices.length) {
            if (prices[i] < prices[i - 1]) {
                profit += prices[i - 1] - prices[boughtOn];
                boughtOn = i;
            } else {
                if (i === prices.length - 1) {
                    profit += prices[i] - prices[boughtOn];
                }
            }
            i++;
        }

        return profit;
    }
}
