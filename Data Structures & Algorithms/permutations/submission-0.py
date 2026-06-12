class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = []
        def path(temp):
            if len(temp) == len(nums):
                res.append(temp[:])

            for num in nums:
                if num in temp:
                    continue
                temp.append(num)
                path(temp)
                temp.pop()

        path([])
        return res
        
        