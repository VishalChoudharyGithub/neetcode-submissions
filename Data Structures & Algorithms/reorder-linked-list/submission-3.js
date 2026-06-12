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
     * @return {void}
     */
    reorderList(head) {
        if(!head.next) return head;
        function getMid() {
            let slow = head, fast = head;
            let prev = null;
            while (fast && fast.next) {
                prev = slow;
                slow = slow.next;
                fast = fast.next.next;
            }
            if (prev) prev.next = null; 
            return slow;
        }
        const mid = getMid();

        function reverseLL(node){
            if(node === null || node.next === null){
                return node;
            }
            const newHead = reverseLL(node.next);
            node.next.next = node;
            node.next = null;
            return newHead;
        }
        const reversedSecondHalf = reverseLL(mid);
        let start = head;
        function mergeLists(list1node,list2node){
            if(!list1node) return list2node;
            const nodeToAppend = mergeLists(list1node.next,list2node.next);
            list2node.next =  nodeToAppend;
            list1node.next = list2node;
            return list1node;
        }

        return mergeLists(start,reversedSecondHalf);
    }
    // 2 4 6 8 10 12
    // 2 12 4 10 6 8
    // 2  4  6 
    // 12 10 8 
}
