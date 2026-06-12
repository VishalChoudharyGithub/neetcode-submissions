class Solution:
    def uniquePaths(self, m: int, n: int) -> int:

        cache = {}

        def unique(r,c):
            if (r,c) in cache:
                return cache[(r,c)]
            if r == m-1 and c == n-1:
                return 1
            if r == m or c == n:
                return 0
            cache[(r,c)] = unique(r+1,c) + unique(r,c+1)
            return cache[(r,c)]

        return unique(0,0)
        