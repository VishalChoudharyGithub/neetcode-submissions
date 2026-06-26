class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let buyPrice = prices[0];
        let localProfit = 0;

        for(let i = 1; i< prices.length;i++){
            if(prices[i] <= buyPrice){
                buyPrice = prices[i];
            }else{
                localProfit =  prices[i] - buyPrice;
                profit = Math.max(localProfit,profit);
            }
        }
        return profit;

    }
}
