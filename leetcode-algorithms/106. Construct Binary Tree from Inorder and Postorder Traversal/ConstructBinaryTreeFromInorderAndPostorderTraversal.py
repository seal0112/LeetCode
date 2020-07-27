# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
# 解題: 切出左右子樹的node, 然後往下遞迴
class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> TreeNode:
        if postorder is None or len(postorder) == 0:
            return None
        if len(postorder) == 1:
            node = TreeNode()
            node.val = postorder[0]
            return node
        node = TreeNode()
        rootVal = postorder[-1]
        node.val = rootVal
        left = inorder[:inorder.index(rootVal)]
        right = inorder[inorder.index(rootVal)+1:]
        node.left = self.buildTree(left, postorder[:len(left)])
        node.right = self.buildTree(right, postorder[len(left):-1])

        return node