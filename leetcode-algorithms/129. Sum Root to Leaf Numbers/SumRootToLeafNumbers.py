# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
'''
解題: 計算由root到所有leaf組成的數字加總為何
    ex.     2
           / \
          3   8         結果是23 + 28 = 51

     用dfs, 然後記錄目前的數字num, 如果走到leaf, 就把num加到result,
     然後把num最後一個數字拿掉, 全部走完就得到答案
'''
class Solution:

    def __init__(self):
        self.result = 0

    def sumNumbers(self, root: TreeNode) -> int:
        if root == None:
            return self.result

        self.dfsFindLeaf(root, "")

        return self.result

    def dfsFindLeaf(self, node: TreeNode, num:int):
        num += str(node.val)

        if node.left:
            self.dfsFindLeaf(node.left, num)
        if node.right:
            self.dfsFindLeaf(node.right, num)
        if node.left == None and node.right == None:
            self.result += int(num)
            num = num[0:len(num)-1]