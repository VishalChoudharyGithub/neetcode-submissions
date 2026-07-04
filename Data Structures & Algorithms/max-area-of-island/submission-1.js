class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let rows = grid.length,
            cols = grid[0].length;
        let max = 0;
        let area = 0;
        function dfs(r, c) {
            if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) return;

            area += 1;
            grid[r][c] = 0;

            dfs(r-1, c);
            dfs(r+1, c);
            dfs(r, c-1);
            dfs(r, c+1);
            max = Math.max(max, area);
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1) {
                    area = 0;
                    dfs(i, j);
                }
            }
        }

        return max;
    }
}
