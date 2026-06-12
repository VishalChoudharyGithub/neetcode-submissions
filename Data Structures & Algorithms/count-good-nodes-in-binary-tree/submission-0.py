# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        res = 0

        def find(root,maxTillHere):
            if not root:
                return
            nonlocal res
            if root.val >= maxTillHere:
                res+=1
                maxTillHere = max(maxTillHere,root.val)
            find(root.left,maxTillHere)
            find(root.right,maxTillHere)
        find(root,-101)
        return res
            
        