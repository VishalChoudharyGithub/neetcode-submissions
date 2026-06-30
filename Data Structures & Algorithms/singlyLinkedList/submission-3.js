class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (this.size < index+1) return -1;
        let node = this.head;
        let counter = 0;
        while (counter !== index) {
            node = node.next;
            counter++;
        }
        return node.value;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let node = this.head;
        this.head = new Node(val);
        this.head.next = node;
        if (!this.head.next) this.tail = this.head;
        this.size += 1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let node = new Node(val);
        if (!this.tail) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.size += 1;
        this.tail = node;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (index >= this.size) return false;

        let node = this.head;
        if (index === 0) {
            this.head = this.head.next;
            if (this.size === 1) this.tail = null;
            this.size -= 1;
            return true;
        }

        let counter = 0;
        while (counter < index - 1) {
            node = node.next;
            counter++;
        }
        let nodeToRemove = node.next;
        node.next = nodeToRemove.next;
        if (index === this.size - 1) {
            this.tail = node;
        }
        this.size -= 1;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const res = [];
        let node = this.head;
        while (node) {
            res.push(node.value);
            node = node.next;
        }
        return res;
    }
}