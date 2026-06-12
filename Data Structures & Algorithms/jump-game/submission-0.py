class Solution:
    def canJump(self, nums: List[int]) -> bool:
        have_to_reach = len(nums) -1
        for i in range(len(nums)-2, -1,-1):
            if i+nums[i] >= have_to_reach:
                have_to_reach = i
            

        return have_to_reach == 0

        