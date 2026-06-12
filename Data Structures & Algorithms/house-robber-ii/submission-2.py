class Solution:
    def rob(self, nums: List[int]) -> int:

        if len(nums) == 1:
            return nums[0]
        def robHouse(nums):
            cache = {}
            def house(i):
                if i in cache:
                    return cache[i]
                if i >= len(nums):
                    return 0
                cache[i] =  max(house(i+2) + nums[i], house(i+1))
                return cache[i]
            return house(0)

        return max(robHouse(nums[1:]),robHouse(nums[:-1]))
        