class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length;
        const columns = grid[0].length;
        let visited = new Set();
        let total = 0;


        function dfs(r,c){
            if(r < 0 || c < 0 ||r === rows || c === columns || grid[r][c] == 0 || visited.has(`${r},${c}`)){
                return;
            }
            visited.add(`${r},${c}`);
            dfs(r+1, c);
            dfs(r-1, c);
            dfs(r, c+1);
            dfs(r, c-1);
        }



        for(let r = 0 ; r<rows;r++){
            for(let c = 0; c< columns;c++){
                if(grid[r][c] === '1' && !visited.has(`${r},${c}`)){
                    total += 1;
                    dfs(r,c);
                }
            }
        }
        return total;
    }
}
