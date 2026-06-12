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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        // 2, 3
        // 9
        function addNumbers (node1,node2,carry){
            if(!node1 && !node2 && !carry){
                return null;
            }
            let sum = (node1?.val || 0) + (node2?.val || 0) + (carry || 0);
            const numberToAdd = sum % 10;
            const node = new ListNode(numberToAdd);
            const newCarry = Math.floor(sum/10);
            const nextNode = addNumbers(node1?.next,node2?.next,newCarry);
            node.next = nextNode;
            return node;
        }
        const head = addNumbers(l1,l2,0);
        return head;
    }
}
