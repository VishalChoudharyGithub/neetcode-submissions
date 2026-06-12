class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        total_rows = len(matrix)
        top,bottom = 0,total_rows-1

        while top <= bottom :
            middle = top + (bottom-top)//2
            if target > matrix[middle][-1]:
                top = middle+1
            elif target < matrix[middle][0]:
                bottom = middle -1
            else:
                break
        else:
            return False

        row = matrix[top + (bottom-top)//2]
        l,r = 0, len(row)
        while l<=r:
            mid = l+ (r-l)//2
            if target > row[mid]:
                l = mid+1
            elif target < row[mid]:
                r = mid-1
            else:
                return True
        else:
            return False


        