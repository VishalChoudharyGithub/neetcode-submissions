class Solution:
    def rob(self, nums: List[int]) -> int:
        # Use a dictionary to store the results of previously computed subproblems
        memo = {}
        
        def rob_house(i):
            # Base case: No more houses to rob
            if i >= len(nums):
                return 0
            
            # Check if the value for this house index is already calculated
            if i in memo:
                return memo[i]
            
            # Either rob this house and move to i + 2, or skip this house and move to i + 1
            memo[i] = max(nums[i] + rob_house(i + 2), rob_house(i + 1))
            
            return memo[i]
        
        # Start at the first house
        return rob_house(0)
        