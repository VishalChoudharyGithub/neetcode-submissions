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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1) return list2;
        if (!list2) return list1;
        let head = null, prev = null;

        while(list1 && list2){
            if(list1.val< list2.val){
                if(!head) head = list1;
                if(prev) prev.next = list1;
                prev = list1;
                list1 = list1.next;
            }else{
                if(prev) prev.next = list2;
                if(!head) head = list2;
                prev = list2;
                list2 = list2.next;
            }
        }
        if(list1){
            prev.next = list1;
        }
        if(list2){
            prev.next = list2;
        }

        return head;
    }
}
