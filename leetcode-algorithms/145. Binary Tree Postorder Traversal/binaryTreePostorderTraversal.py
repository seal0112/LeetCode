# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
'''
兩種解法
1. 使用遞迴傳入 左子樹 跟 右子樹，最後跟root組成postorder的list
2. 用BFS，然後都先檢查右子樹再檢查左子樹，走過的每個node.val都insert進結果的第0位置
'''
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []

        result = []
        stack = [root]

        while stack:
            current_node = stack.pop(0)
            result.insert(0, current_node.val)

            if current_node.left:
                stack.insert(0, current_node.left)

            if current_node.right:
                stack.insert(0, current_node.right)

        return result