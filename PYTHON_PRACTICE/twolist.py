# class Solution():
#     l1 = []
#     l2 = []
#     for i in range(3):
#         input1 = (f"Enter L1 element {i+1}\n": )
#         my_list.append(input1)
#     for j in range(3):
#         input2 = (f"Enter L2 element {j+1}\n": )

#     def addTwoList(input1, input2):
#         sum = input1 + input2
#         print(sum)

# Solution():

# class Solution:

#     def __init__(self):
#         self.l1 = []
#         self.l2 = []

#     def take_input(self):
#         for i in range(3):
#             input1 = int(input(f"Enter L1 no {i+1}: "))
#             self.l1.append(input1)
        

#         for i in range(3):
#             input2 = int(input(f"Enter L1 no {i+1}: "))
#             self.l2.append(input2)

#     def add_two_list(self):
#         result = []
#         for i in range(3):
#             result.append(self.l1[i] + self.l2[i])
#             if result[i] >= 10:
#                 digit_l = []
#                 digit = [int (d) for d in str(result)]
#                 digit_l.append(digit[0])
#             return result[i+1] + digit[0]
    
# obj = Solution()

# obj.take_input()

# result = obj.add_two_list()

# print("Sum List: ", result)




# Step 1: Define Node
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# Step 2: Solution Class
class Solution:
    def addTwoNumbers(self, l1, l2):

        dummy = ListNode(0)   # fake starting node
        current = dummy       # pointer to build new list
        carry = 0

        # Loop until both lists and carry are finished
        while l1 or l2 or carry:

            # Take values (if node doesn't exist → take 0)
            val1 = l1.val if l1 else 0
            val2 = l2.val if l2 else 0

            # Add digits + carry
            total = val1 + val2 + carry

            # Update carry
            carry = total // 10

            # Create new node with single digit
            current.next = ListNode(total % 10)

            # Move current forward
            current = current.next

            # Move l1 and l2 forward
            if l1:
                l1 = l1.next
            if l2:
                l2 = l2.next

        return dummy.next
    
obj = Solution()

obj_add = obj.addTwoNumbers([2,4,3], [5,4,4])

print(obj_add)
