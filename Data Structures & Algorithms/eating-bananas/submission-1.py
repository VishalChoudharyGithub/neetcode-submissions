class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        max_num = max(piles)
        l,r = 1,max_num
        res = r
        while l<= r:
            mid = (l+r)//2
            total_time = 0
            for pile in piles:
                total_time += math.ceil(float(pile)/mid)
            if total_time <= h:
                res = mid
                r = mid-1
            else:
                l = mid+1
        return res