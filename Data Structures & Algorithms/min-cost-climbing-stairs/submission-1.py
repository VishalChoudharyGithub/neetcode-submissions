class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        cache = {}
        
        def minCost(step):
            if step in cache:
                return cache[step]
            if step >= len(cost):
                return 0
            
            cache[step] =  min(minCost(step+1),minCost(step+2))+ cost[step]
            return cache[step]
        
        return min(minCost(0),minCost(1))
        