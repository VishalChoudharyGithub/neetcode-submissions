class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []
        def dfs(pairs:List[int],index:int):
            if index == len(nums):
                res.append(pairs)
                return
            dfs(pairs,index+1)
            dfs(pairs + [nums[index]],index+1)
        
        dfs([],0)
        return res
        
        