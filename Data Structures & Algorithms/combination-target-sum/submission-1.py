class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        res = []
        def dfs(pairs,index,remaining):
            if remaining == 0:
                res.append(pairs)
                return 
            if index == len(nums) or remaining < 0:
                return
            dfs(pairs,index+1,remaining)    
            dfs(pairs + [nums[index]],index,remaining-nums[index])
        dfs([],0,target)
        return res



        