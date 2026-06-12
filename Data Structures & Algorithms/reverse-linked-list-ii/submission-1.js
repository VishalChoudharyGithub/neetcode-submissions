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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        function getStartingPoint(){
            let node = head;
            let prev = null;
            let i = 1;
            while(i < left){
                i++;
                prev = node;
                node = node.next;
            }
            return [prev,node];
        }
        const [prev,start] = getStartingPoint();

        function getReversedList(i,r,node){
            if(i === r){
                return [node,node,node.next];
            }
            const [nextNode,newHead, finalNode] = getReversedList(i+1,r, node.next);
            nextNode.next = node;
            return [node,newHead,finalNode];
        }
        const [node,newHead,finalNode] = getReversedList(left,right,start);
        node.next = finalNode;
        if(prev)prev.next = newHead;
        else head = newHead;

        return head;
    }
}
