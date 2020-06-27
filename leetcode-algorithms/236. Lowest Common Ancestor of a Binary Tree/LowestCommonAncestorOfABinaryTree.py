# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
'''
解題: 找出最靠近兩個點p, q的共同祖先(lowest common ancestor, LCA),
     因為是binary tree, 有保證每個點只有一個

     function這樣設計
     首先如果輸入的root就是p or q, 那root就是LCA, 如果root是None, 就回傳None
     不然的話就遞迴往下找root.left跟root.right, 如果left跟right都有找到p or q, 那root就是LCA
     如果只有left或是right找到p or q, 那LCA就會在有找到的那個子樹裡
     (node.left有p或q, node.right沒有, LCA就一定在node.left裡)
     假設node.left有找到, 就回傳那個子樹即可
'''

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if root == None or root == p or root == q:
            return root

        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)

        if left and right:
            return root

        return left if left else right


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
'''
解題: 找出最靠近兩個點p, q的共同祖先(lowest common ancestor, LCA),
     因為是binary tree, 有保證每個點只有一個

     上面的解法用遞迴, 時間複雜度相同O(n), 但是執行時間時間有點久
     這邊的解法用bfs, 先用bfs找到所有node的parent(用dict紀錄 key是node, value是parent)
     然後再從p由的parent開始找出p的ancestor有哪些,
     接著檢查q的ancestor, 如果其中一個跟p的相同, 就代表這個node是LCA
     這樣時間複雜度是O(n), 因為不是遞迴, 所以執行時間會快一些
'''

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        stack = [root]
        parent = {root: None}
        while p not in parent or q not in parent:
            node = stack.pop()
            if node.left:
                parent[node.left] = node
                stack.append(node.left)
            if node.right:
                parent[node.right] = node
                stack.append(node.right)

        ancestors = set()
        while p:
            ancestors.add(p)
            p = parent[p]
        while q not in ancestors:
            q = parent[q]
        return q