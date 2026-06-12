/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        function totalCount(node){
           if(node.next === null) return 1;
           return 1 + totalCount(node.next); 
        }
        const index = totalCount(head) - (n);
        if(index === 0) {
            let node = head.next;
            head.next = null;
            head = node;
            return head;
        }
        let start = 1;
        let node = head;
        while(start < index){
            node = node.next;
            start++;
        }
        if(node.next.next === null){
            node.next = null;
            return head;
        }
        const nodeToRemove = node.next;
        node.next = nodeToRemove.next;
        nodeToRemove.next = null;
        return head;
    }
}
