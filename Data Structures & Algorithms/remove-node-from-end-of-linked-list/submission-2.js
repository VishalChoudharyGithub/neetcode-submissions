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
//   1 ,2 ,3 ,4    2
        const dummyNode = new ListNode();
        dummyNode.next = head;
        let nodeEnd = head;
        let nodeStart = head;
        let step = 1;

        while(true){
            if(step === n) break;
            nodeEnd = nodeEnd.next;
            step++;
        }
        let prev = dummyNode;
        while(nodeEnd.next){
            nodeEnd = nodeEnd.next;
            prev = nodeStart;
            nodeStart = nodeStart.next;
        }

        prev.next = nodeStart.next;
        nodeStart.next = null;

        return dummyNode.next;


    }
}
