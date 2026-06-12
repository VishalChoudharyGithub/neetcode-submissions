class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length;
        const columns = grid[0].length;
        const Directions = [
            [1,0],
            [-1,0],
            [0,1],
            [0,-1]
        ]
        let maxArea = 0;

        function dfs(r,c){
            if(r < 0 || c< 0 || r === rows || c === columns || grid[r][c] === 0){
                return 0;
            }
            grid[r][c] = 0;
            let area = 1;
            for(let [rowD,columnD] of Directions){
                area += dfs(r+ rowD, c+ columnD);
            }
            return area;


        }



        for(let r = 0; r< rows;r++){
            for(let c = 0 ;c< columns;c++){
                if(grid[r][c] === 1){
                    maxArea = Math.max(maxArea,dfs(r,c));
                }
            }
        }
        return maxArea;
    }
}
