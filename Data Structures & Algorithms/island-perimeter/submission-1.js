class Solution {
    islandPerimeter(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let res = 0;

        function dfs(r, c) {
            // stepped off the grid, or onto WATER (0)? → that's a real perimeter edge, count it and retreat
            if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) {
                res++;
                return;
            }
            // it's land — but is it land I've ALREADY visited? (-1)
            // if so, stop. crucially: NO res++ here — a visited neighbour is a shared wall, not perimeter
            if (grid[r][c] === -1) return;

            grid[r][c] = -1;    // fresh land → mark visited with -1, NOT 0.
                                // this is the whole point: -1 is distinct from water(0), so when a
                                // neighbour looks back at me it sees "visited land", not "water", and won't count me

            dfs(r - 1, c);      // up
            dfs(r + 1, c);      // down
            dfs(r, c - 1);      // left
            dfs(r, c + 1);      // right
        }

        outer:
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1) {   // only start from unvisited land
                    dfs(i, j);
                    break outer;          // one island guaranteed → done after flooding it
                }
            }
        }

        return res;
    }
}