class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.data = Array.from({length:matrix.length+1},()=>new Array(matrix[0].length+1).fill(0));
        for(let i = 0; i<matrix.length;i++){
            let prefix = 0;
            for(let j = 0; j< matrix[0].length;j++){
                prefix += matrix[i][j];
                this.data[i+1][j+1] = prefix + this.data[i][j+1];
            }
        }

        console.log(this.data)
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        return this.data[row2+1][col2+1] - this.data[row1][col2+1] - this.data[row2+1][col1] + this.data[row1][col1]
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
