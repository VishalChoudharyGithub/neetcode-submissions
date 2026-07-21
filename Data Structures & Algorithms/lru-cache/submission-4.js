class LRUCache {
    /**
     * Idea:
     *
     * We need both get() and put() in O(1).
     *
     * A hashmap gives O(1) lookup.
     * A doubly linked list gives O(1) insertion/removal.
     *
     * Linked list order:
     *
     * head <-> Most Recently Used ... Least Recently Used <-> tail
     *
     * Whenever a key is accessed, it becomes the newest one,
     * so we move it right after head.
     *
     * Whenever capacity is exceeded,
     * remove the node just before tail.
     */

    constructor(capacity) {
        this.capacity = capacity;

        // key -> node
        this.cache = new Map();

        // Keeps usage order
        this.ll = new LinkedList();
    }

    get(key) {
        // If key doesn't exist,
        // cache miss.
        if (!this.cache.has(key)) return -1;

        const node = this.cache.get(key);

        // Since this key was just used,
        // it is no longer an old item.
        // Remove it from its current position...
        this.removeNode(node);

        // ...and make it the newest node.
        this.moveToFront(node);

        return node.value;
    }

    put(key, value) {
        let node;

        // Case 1:
        // Key already exists.
        // Only update its value and mark it as recently used.
        if (this.cache.has(key)) {
            node = this.cache.get(key);
            node.value = value;

            // We'll insert it again at the front.
            this.removeNode(node);
        } else {
            // Case 2:
            // New key.
            //
            // If cache is full,
            // remove the least recently used node.
            if (this.cache.size === this.capacity) {
                // LRU node always stays just before tail.
                const lastNode = this.ll.tail.prev;

                this.removeNode(lastNode);

                this.cache.delete(lastNode.key);
            }

            node = new Node(value, key);

            this.cache.set(key, node);
        }

        // Newly inserted or recently updated node
        // should become the MRU node.
        this.moveToFront(node);
    }

    moveToFront(node) {
        // Insert node immediately after dummy head.

        const firstNode = this.ll.head.next;

        this.ll.head.next = node;
        node.prev = this.ll.head;

        node.next = firstNode;
        firstNode.prev = node;
    }

    removeNode(node) {
        // Since this is a doubly linked list,
        // removing a node only requires reconnecting
        // its previous and next nodes.

        const prev = node.prev;
        const next = node.next;

        prev.next = next;
        next.prev = prev;
    }
}

class LinkedList {
    constructor() {
        // Dummy nodes eliminate edge cases.
        //
        // We never need to check:
        // "Is this the first node?"
        // "Is this the last node?"
        //
        // Every real node always has
        // both prev and next.

        this.head = new Node(-1);
        this.tail = new Node(-1);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
}

class Node {
    constructor(value, key = null) {
        this.key = key;
        this.value = value;

        this.prev = null;
        this.next = null;
    }
}
