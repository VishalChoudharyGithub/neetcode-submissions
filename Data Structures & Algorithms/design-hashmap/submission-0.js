class MyHashMap {
    constructor() {
        this.data = Array.from({length:10000},()=> new LinkedList());
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const dataList = this.getDataList(key);
        if(!this.contains(key)){
            const node = new Node(key,value);
            node.next = dataList.head;
            dataList.head = node;
            return;
        }
        const current = dataList.head;
        while(current){
            if(current.key === key){
                current.value = value;
                return;
            }
            current = current.next;
        }
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const dataList = this.getDataList(key);
        if(!this.contains(key)) return -1;
        const current = dataList.head;
        while(current){
            if(current.key === key){
                return current.value;
            }
            current = current.next;
        }
        return -1;

    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if(!this.contains(key)) return;
        const dataList = this.getDataList(key);
        let current = dataList.head;
        if(current.key === key) {
            dataList.head = current.next;
            current.next = null;
            return;
        }
        let prev = current;
        current = current.next;
        while(current){
            if(current.key === key){
                prev.next = current.next;
                current.next = null;
            }
        }
    }

    contains(key){
        const dataList = this.getDataList(key);
        let current = dataList.head;
        if(!current) return false;
        while(current){
            if(current.key === key) return true;
            current = current.next;
        }
        return false;
    }

    getDataList(key){
        const index =  key % 10000;
        return this.data[index];
    }
}

class Node {
    constructor(key,value){
        this.next = null;
        this.value =  value;
        this.key = key;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
