class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.array = new Array(capacity);
        this.lastAvailableIndex = 0;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.array[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.lastAvailableIndex  === this.array.length) this.resize();
        this.array[this.lastAvailableIndex] = n;
        this.lastAvailableIndex += 1;
    }

    /**
     * @returns {number}
     */
    popback() {
        return this.array[--this.lastAvailableIndex];
    }

    /**
     * @returns {void}
     */
    resize() {
        const capacity = this.array.length * 2;
        const newArr = new Array(capacity);
        for (let i = 0; i < this.lastAvailableIndex; i++) {
            newArr[i] = this.array[i];
        }
        this.array = newArr;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.lastAvailableIndex;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.array.length;
    }
}
