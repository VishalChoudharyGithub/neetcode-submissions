class Solution:
    def findMin(self, nums: List[int]) -> int:
        curr_min = float('inf')
        l,r = 0, len(nums) -1

        while l<= r:
            mid = l+ (r-l)//2
            if nums[r] < nums[mid]:
                l = mid+1
            else:
                r = mid-1
            curr_min = min(curr_min,nums[mid])
        return curr_min
            
            




        