# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# By looping
# class Solution:
#     def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
#         curr = head
#         prev = None
#         while curr != None:
#             next = curr.next
#             curr.next = prev
#             prev = curr
#             curr = next

#         return prev


# recursion
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head == None or head.next == None:
            return head
        
        reversedList = self.reverseList(head.next)
        head.next.next = head
        head.next = None
        return reversedList

        
        
        