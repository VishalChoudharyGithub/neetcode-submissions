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
     * @return {boolean}
     */
    hasCycle(head) {
        if(!head || !head.next || !head.next.next) return false
        let fast = head.next.next, slow = head;

        while(true){
            if(fast === slow) return true;
            slow = slow.next;
            if(!fast.next || !fast.next.next) return false;
            fast = fast.next.next;
        }

    }
}
