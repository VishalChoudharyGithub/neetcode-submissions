class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        rows = len(board)
        cols = len(board[0])
        path = set()

        def havePath(x,y,indexInWord):
            if indexInWord == len(word):
                return True

            if(x <0 or x == rows  or y <0 or y==cols or board[x][y] != word[indexInWord] or (x,y) in path):
                return False
            path.add((x,y))
            res =  havePath(x+1,y,indexInWord+1) or havePath(x-1,y,indexInWord+1) or havePath(x,y+1,indexInWord+1) or havePath(x,y-1,indexInWord+1)
            path.remove((x,y))
            return res
        for i in range(rows):
            for j in range(cols):
                if havePath(i,j,0):
                    return True

        return False


        