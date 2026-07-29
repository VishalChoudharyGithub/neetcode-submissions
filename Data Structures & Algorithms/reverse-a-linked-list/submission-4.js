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
     * @return {ListNode}
     */
    reverseList(head) {
        if (!head) return null;
        function reverse(node){
            if(!node.next){
                head = node;
                return node;
            }
            const nextNode = reverse(node.next);
            nextNode.next = node;
            node.next = null;
            return node;
        }
        reverse(head);
        return head;
    }
    // reverseList(head) {
    //     if(!head) return null;
    //     let node = head;
    //     let prev = null;
    //     while(node.next){
    //         const next = node.next;
    //         node.next = prev;
    //         prev = node;
    //         node = next;
    //     }
    //     node.next = prev;
    //     return node;
    // }
}
