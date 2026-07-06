class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        const queue = [];

        let fresh = 0;
        for(let i = 0 ; i< rows;i++){
            for(let j = 0 ; j< cols;j++){
                if(grid[i][j] === 1) fresh++;
                else if(grid[i][j] === 2) queue.push([i,j]);
            }
        }
        const directions = [[0,-1],[0,1],[1,0],[-1,0]];

        let time = 0;

        while(queue.length && fresh >0){
            const currentCircle = queue.length;
            for( let i = 0 ;i< currentCircle;i++){
                const [r,c] = queue.shift();

                for( let [dr,dc] of directions){
                    const nr = r+ dr;
                    const nc = c+ dc;
                    if(nr< 0 || nr>= rows | nc<0 || nc>=cols|| grid[nr][nc] !== 1) continue;
                    grid[nr][nc] = 2;
                    fresh--;
                    queue.push([nr,nc]);
                }
            }
            time++;
        }
        return fresh ? -1:time;
    }
}
