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
        let node1 = l1, node2 = l2;
        let carry = 0;
        let dummyHead = new ListNode();
        let sumNode = dummyHead;
        while(node1 && node2){
            let sum = node1.val + node2.val + carry;
            if( sum > 9){
                sum = sum % 10;
                carry = 1;
            } else {
                carry = 0;
            }
            const newNode = new ListNode(sum);
            sumNode.next = newNode;
            sumNode = sumNode.next;
            node1 = node1.next;
            node2 = node2.next;
        }

        while(node1){
            let sum = node1.val + carry;
            if( sum > 9){
                sum = sum % 10;
                carry = 1;
            } else {
                carry = 0;
            }
            const newNode = new ListNode(sum);
            sumNode.next = newNode;
            sumNode = sumNode.next;
            node1 = node1.next;
        }
        while(node2){
            let sum = node2.val + carry;
            if( sum > 9){
                sum = sum % 10;
                carry = 1;
            } else {
                carry = 0;
            }
            const newNode = new ListNode(sum);
            sumNode.next = newNode;
            sumNode = sumNode.next;
            node2 = node2.next;
        }
        if(carry){
            const newNode = new ListNode(carry);
            sumNode.next = newNode;
            sumNode = sumNode.next;
        }

        return dummyHead.next;

    }
}
