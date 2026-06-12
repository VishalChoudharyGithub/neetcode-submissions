class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const rows = matrix.length;
        const columns = matrix[0].length;
        this.prefixSum = Array.from({length:rows + 1},()=> new Array(columns + 1).fill(0));
        for(let r  = 0 ;r<rows;r++){
            let prefix = 0;
            for(let c = 0;c<columns;c++){
                prefix += matrix[r][c];
                this.prefixSum[r+1][c+1] =this.prefixSum[r][c+1] +  prefix;
            }
        }

        console.log(this.prefixSum)
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        row1++;row2++;col1++;col2++;
        return this.prefixSum[row2][col2] - this.prefixSum[row1-1][col2] - this.prefixSum[row2][col1-1] + this.prefixSum[row1-1][col1-1]
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */


