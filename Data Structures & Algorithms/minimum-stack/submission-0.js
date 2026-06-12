class MinStack {
    constructor() {
        this.min = Infinity;
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(!this.stack.length){
            this.stack.push(0);
            this.min = val;
        }else{
            const encodedVal = val - this.min;
            this.stack.push(encodedVal);
            if(encodedVal<0) this.min = val;
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if(!this.stack.length) return;
        const val = this.stack.pop();
        if(val < 0) this.min = this.min - val;
    }

    /**
     * @return {number}
     */
    top() {
        const top = this.stack[this.stack.length - 1];
        return top > 0 ? top + this.min : this.min;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}
