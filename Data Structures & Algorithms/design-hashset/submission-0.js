class MyHashSet {
    constructor() {
        this.data = Array.from({length:10000},()=>new LinkedList());
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if(this.contains(key)) return;
        const datalist = this.getDatalist(key);
        if(datalist.head === null) datalist.head = new Node(key);
        else{
            let curr = datalist.head;
            while(curr.next !== null) {
                curr = curr.next;
            }
            curr.next = new Node(key);
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if(!this.contains(key)) return;
        const datalist = this.getDatalist(key);
        if(datalist.head === null) datalist.head = new Node(key);
        else{
            let curr = datalist.head;
            if(curr.value === key) {
                datalist.head = curr.next;
                curr.next = null;
            }
            else{
                let prev = curr;
                curr = curr.next;
                while(curr.value !== null) {
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
                curr.next = null;
            }
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const datalist = this.getDatalist(key);
        if(datalist.head === null) return false;
        let curr = datalist.head;
        while(curr !== null){
            if(curr.value === key) return true;
            curr = curr.next;
        }
        return false;
    }

    getDatalist(key){
        const index = key % 10000;
        return this.data[index];
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
