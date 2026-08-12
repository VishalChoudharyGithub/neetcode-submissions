class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        function isInvalidRow(r,j){
            for( let c = 0; c < 9;c++){
                if(j === c) continue;
                if(board[r][c] === board[r][j]) return true;
            }
            return false;
        }
        function isInvalidCol(i,c){
            for( let r = 0; r< 9;r++){
                if(r === i) continue;
                if(board[r][c] === board[i][c]) return true;
            }
            return false;
        }

        function isInvalidGrid(i,j){
            let gridRow = Math.floor(i/3) * 3;
            let gridCol = Math.floor(j/3) * 3;
            for( let r = gridRow; r< gridRow+3; r++){
                for( let c = gridCol; c < gridCol+3; c++){
                    if( r=== i && j === c) continue;
                    if(board[r][c] === board[i][j]) return true;
                }
            }
            return false;
        }

        for( let i = 0 ; i< 9;i++){
            for( let j = 0 ; j< 9;j++){
                if (board[i][j] === '.') continue;
                if(isInvalidRow(i,j) || isInvalidCol(i,j)|| isInvalidGrid(i,j)) return false;
            }
        }
        return true;
    }
}
