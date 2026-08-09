class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let targetRow = -1;
        for (let rowIndex in matrix) {
            const row = matrix[rowIndex];
            if (row[0] <= target && target <= row[row.length - 1]) {
                targetRow = rowIndex;
                break;
            }
        }
        if (targetRow === -1) return false;
        const row = matrix[targetRow];
        function exist(l, r) {
            if (l > r) return false;
            const mid = l + Math.floor((r - l) / 2);
            if (row[mid] === target) return true;
            if (target < row[mid]) return exist(l, mid - 1);
            return exist(mid + 1, r);
        }
        return exist(0, row.length - 1);
    }
}
