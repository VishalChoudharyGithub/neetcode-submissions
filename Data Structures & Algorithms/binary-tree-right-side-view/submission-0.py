# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        height = 0
        res = []
        def dfs(root,res,currHeight):
            if not root:
                return res
            nonlocal height
            if currHeight > height:
                res.append(root.val)
                height = currHeight
            dfs(root.right,res,currHeight+1)
            dfs(root.left,res,currHeight+1)
            return res

        return dfs(root,res,1)

        