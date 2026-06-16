class MyHashMap {
    constructor() {
        this.data = Array.from({ length: 10000 }, () => new LinkedList());
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.getBucketList(key).put(key, value);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        return this.getBucketList(key).get(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.getBucketList(key).remove(key);
    }

    getHashedKey(key) {
        return key % 10000;
    }

    getBucketList(key) {
        return this.data[this.getHashedKey(key)];
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    put(key, value) {
        const node = new Node(key, value);
        if (this.head === null) {
            this.head = node;
            return;
        }
        let curr = this.head;
        while (true) {
            if (curr.key === key) {
                curr.value = value;
                return;
            }

            if (!curr.next) {
                curr.next = node;
                return;
            }
            curr = curr.next;
        }
    }

    get(key) {
        let curr = this.head;
        while (curr) {
            if (curr.key === key) return curr.value;
            curr = curr.next;
        }
        return -1;
    }

    remove(key) {
        const dummy = new Node(-1, -1);
        dummy.next = this.head;

        let prev = dummy,
            curr = this.head;
        while (curr) {
            if (curr.key === key) {
                prev.next = curr.next;
                break;
            }
            prev = curr;
            curr = curr.next;
        }
        this.head = dummy.next;
        dummy.next = null;
    }
}

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */