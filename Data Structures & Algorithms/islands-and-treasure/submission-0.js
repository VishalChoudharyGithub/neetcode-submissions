class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const INF = 2147483647;
        const rows = grid.length;
        const cols = grid[0].length;
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];  // up, down, left, right

        // I need a BFS that starts at ONE room and finds its nearest treasure.
        function bfsFromRoom(startR, startC) {
            const queue = [[startR, startC, 0]];   // [row, col, stepsSoFar]
            const visited = new Set();             // fresh visited set FOR THIS ROOM'S search only
            visited.add(`${startR},${startC}`);

            while (queue.length > 0) {
                const [r, c, dist] = queue.shift();

                if (grid[r][c] === 0) return dist;  // hit a treasure → this is the nearest, done

                for (const [dr, dc] of directions) {
                    const nr = r + dr, nc = c + dc;
                    // in bounds? not a wall? not already seen in THIS search?
                    if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
                    if (grid[nr][nc] === -1) continue;               // wall, can't pass
                    if (visited.has(`${nr},${nc}`)) continue;        // already explored this search
                    visited.add(`${nr},${nc}`);
                    queue.push([nr, nc, dist + 1]);                  // one step further out
                }
            }
            return INF;   // queue drained, never found a treasure → unreachable
        }

        // now the outer part: run that whole BFS once PER room
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === INF) {           // it's a room needing a distance
                    grid[r][c] = bfsFromRoom(r, c); // ← a full grid-wide search, just for this one cell
                }
            }
        }
    }
}
