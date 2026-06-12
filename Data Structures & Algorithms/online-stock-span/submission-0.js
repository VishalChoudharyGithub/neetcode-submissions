class StockSpanner {
    constructor() {
       this.tracker = []; 
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        console.log(this.tracker.length);
        if(!this.tracker.length) {
            this.tracker.push([price,1]);
            return 1;
        };
        let span = 1;
        while(this.tracker.length && this.tracker[this.tracker.length - 1][0] <= price){
            span += this.tracker[this.tracker.length - 1][1];
            this.tracker.pop(this.tracker.length-1);
        }
        this.tracker.push([price, span]);
        return span;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
