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
        if (!head || !head.next) return head;
        const mid = getMid(head);
        const head2 = reverseList(mid.next);
        mid.next = null;
        let head1 = head;

        mergeLists(head1, head2);
        return head;

        function mergeLists(node1,node2){
            if(!node1 || !node2) return;
            let node1Next = node1.next;
            let node2Next = node2.next;
            node1.next = node2;
            node2.next = node1Next;
            mergeLists(node1Next,node2Next);

        }

        function reverseList(node){
            if(!node.next) return node;
            const head = reverseList(node.next);
            node.next.next = node;
            node.next = null;
            return head;
        }


        function getMid(node){
            let fast = node.next, slow = node;
            while(fast && fast.next){
                fast = fast.next.next;
                slow = slow.next;
            }

            return slow;
        }
    }
}
