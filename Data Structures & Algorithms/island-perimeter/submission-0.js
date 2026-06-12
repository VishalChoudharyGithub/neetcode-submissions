class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        let visited = new Set();
        function dfs(r,c){
            if(r< 0  || c< 0 || r=== grid.length|| c=== grid[0].length|| grid[r][c] === 0){
                return 1;
            }
            const key = `${r},${c}`;
            if(visited.has(key)) return 0;
            visited.add(key);
            return dfs(r-1,c) + dfs(r,c-1) + dfs(r+1,c) + dfs(r,c+1);
        }

        for(let r = 0 ;r< grid.length;r++){
            for(let c = 0 ; c< grid[0].length;c++ ){
                if(grid[r][c] === 1){
                    return dfs(r,c);
                }
            }
        }
        return 0;
    }
}
