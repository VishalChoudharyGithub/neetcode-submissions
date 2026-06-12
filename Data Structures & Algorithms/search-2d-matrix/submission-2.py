class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        rows,cols  = len(matrix),len(matrix[0])

        top,bottom = 0,rows-1
        while top <= bottom:
            row = (top + bottom) //2
            if target >= matrix[row][0] and target <= matrix[row][-1]:
                break;
            elif target < matrix[row][0]:
                bottom = row-1
            else:
                top = row+1
        
        if not (top <= bottom):
            return False
        
        row = (top + bottom) //2
        l,r = 0, cols-1
        while l<=r:
            m = (l+r)//2
            if matrix[row][m] == target: 
                return True
            elif target > matrix[row][m]:
                l = m+1
            else:
                r = m-1
        return False
        