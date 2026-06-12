class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        
        def minCost(step):
            if step >= len(cost):
                return 0
            
            return min(minCost(step+1),minCost(step+2))+ cost[step]
        
        return min(minCost(0),minCost(1))
        