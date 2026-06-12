class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let boughtOnDay = 0;
        for(let i = 1; i<prices.length;i++){
            const sellingProfit = prices[i] - prices[boughtOnDay];
            if(sellingProfit > 0){
                profit += sellingProfit;
            }
                boughtOnDay = i;
        }

        return Math.max(profit,0);
    }
}
