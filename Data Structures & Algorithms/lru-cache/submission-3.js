class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        // I will use a hashmap which will contain <key, address>  address of node
        this.cache = new Map();
        this.ll = new LinkedList();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.cache.has(key)) return -1;
        // get the node ,
        const node = this.cache.get(key);
        //adjust the addresses after removal

        this.removeTheNode(node);

        // append at head
        this.moveToFront(node);
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {

        // update the value if exist or create new and move to front
        let node;
        if(this.cache.has(key)){
            node = this.cache.get(key);
            node.value = value;
            this.removeTheNode(node);
            // check size if already touched capacity then remove the last node
        }else{
            if (this.cache.size === this.capacity) {
                const lastNode = this.ll.tail.prev;
                this.removeTheNode(lastNode);
                this.cache.delete(lastNode.key);
            }
            node = new Node(value,key);
            this.cache.set(key,node);
        }

        this.moveToFront(node);

    }

    moveToFront(node) {
        const firstNode = this.ll.head.next;
        this.ll.head.next = node;
        node.prev = this.ll.head;
        node.next = firstNode;
        firstNode.prev = node;
    }

    removeTheNode(node) {
        const prevToNode = node.prev;
        const nextToNode = node.next;

        prevToNode.next = nextToNode;
        nextToNode.prev = prevToNode;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node(-1);
        this.tail = new Node(-1);
        this.head.next = this.tail; 
        this.tail.prev = this.head; 
    }
}

class Node {
    constructor(value,key=null) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
