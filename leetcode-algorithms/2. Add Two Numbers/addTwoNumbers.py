# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:

        carry = 0
        result = ListNode()
        tail = result

        while l1 or l2:
            add_result = 0

            if l1:
                add_result += l1.val
                l1 = l1.next

            if l2:
                add_result += l2.val
                l2 = l2.next

            add_result += carry

            carry = add_result//10
            tail.next = ListNode(add_result % 10)
            tail = tail.next

        if carry == 1:
            tail.next = ListNode(val=carry)

        return result.next