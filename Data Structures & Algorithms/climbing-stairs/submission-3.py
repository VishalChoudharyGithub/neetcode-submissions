class Solution:
    def climbStairs(self, n: int) -> int:
        cache = {}
        def climb(c):
            if c in cache:
                return cache[c]
            if c == 1:
                return 1
            if c == 2:
                return 2
            cache[c] =  climb(c-1)+ climb(c-2)
            return cache[c]
        return climb(n)
        