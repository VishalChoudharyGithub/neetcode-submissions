class MyHashSet {
    constructor() {
        this.data = Array.from({ length: 10000 }, () => new LinkedList());
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if (this.contains(key)) return;

        const dataList = this.getDataList(key);
        const newNode = new Node(key);
        if (dataList.head === null) {
            dataList.head = newNode;
            return;
        }
        let node = dataList.head;
        while (node.next) {
            node = node.next;
        }
        node.next = newNode;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if (!this.contains(key)) return;
        const dataList = this.getDataList(key);
        let node = dataList.head;
        if (node.value === key) {
            dataList.head = node.next;
            node.next = null;
        } else {
            while (node.next.value !== key) {
                node = node.next;
            }
            const newNext = node.next.next;
            node.next.next = null;
            node.next = newNext;
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const dataList = this.getDataList(key);

        if (dataList.head === null) return false;
        let node = dataList.head;

        while (node !== null) {
            if (node.value === key) return true;
            node = node.next;
        }
        return false;
    }

    getHashKey(key) {
        return key % 10000;
    }

    getDataList(key) {
        const hashKey = this.getHashKey(key);
        return this.data[hashKey];
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
}
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
