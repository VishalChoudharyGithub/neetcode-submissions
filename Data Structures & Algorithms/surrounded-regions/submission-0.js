class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let rows = board.length;
        let cols = board[0].length;

        const queue = [];
        const directions = [[-1,0],[1,0],[0,1],[0,-1]];
        for(let i = 0 ; i< rows;i++){
            for(let j = 0 ; j< cols;j++){
                if(board[i][j] === 'O' && (i === 0 || i === rows-1|| j === 0 || j === cols-1)){
                    queue.push([i,j]);
                    board[i][j] = 'Y';
                }
            }
        }

        while(queue.length){
            const [r,c] = queue.shift();
            for(let [dr, dc] of directions){
                const nr = r+dr;
                const nc = c+dc;

                if(nr < 0 || nr >= rows || nc < 0 || nc >= cols || board[nr][nc] !== 'O') continue;
                board[nr][nc] = 'Y';
                queue.push([nr,nc]);
            }
        }

        for(let i = 0 ; i< rows;i++){
            for(let j = 0 ; j< cols;j++){
                if(board[i][j] === 'Y'){
                    board[i][j] = 'O';
                }else if(board[i][j] === 'O'){
                    board[i][j] = 'X';
                }
            }
        }
    }
}
