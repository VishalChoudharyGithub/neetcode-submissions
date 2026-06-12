class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []

        def subs(arr,curr):
            res.append(arr.copy())
            for i in range(curr,len(nums)):
                arr.append(nums[i])
                subs(arr,i+1)
                arr.pop()

        subs([],0)
        return res
