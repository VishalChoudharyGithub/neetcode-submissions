class Solution:
    def countBits(self, n: int) -> List[int]:
        output = [0]
        for i in range(1,n+1):
            val = i
            count = 0
            while val:
                val &= val - 1
                count += 1
            output.append(count)
        return output

        