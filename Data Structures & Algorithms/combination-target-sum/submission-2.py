class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        ans = []
        def dfs(arr,val,curr):
            if val == target:
                ans.append(arr.copy())
                return
            if val > target:
                return 
            for i in range(curr,len(nums)):
                arr.append(nums[i])
                dfs(arr,val+ nums[i], i)
                arr.pop()
        dfs([],0,0)
        return ans
        