class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const INF = 2147483647;
        const rows = grid.length;
        const cols = grid[0].length;
        const queue = [];                 // ONE shared queue for the whole grid now — not one per room
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        // seed EVERY treasure up front. this is the whole trick — many sources, one search.
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 0) queue.push([r, c]);   // each treasure is a wave-origin at distance 0
            }
        }

        while (queue.length > 0) {
            const [r, c] = queue.shift();   // its distance is already locked in grid[r][c]

            for (const [dr, dc] of directions) {
                const nr = r + dr, nc = c + dc;

                // fill a neighbor ONLY if it's an untouched room (=== INF).
                // this single check rejects out-of-bounds, walls(-1), treasures(0), AND already-stamped rooms.
                // "already stamped" being rejected is what guarantees the nearest treasure wins — once set, locked.
                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || grid[nr][nc] !== INF) continue;

                grid[nr][nc] = grid[r][c] + 1;   // stamp distance = where-I-came-from + 1
                queue.push([nr, nc]);            // enqueue so this room's wave keeps spreading (mark-on-enqueue)
            }
        }
    }
}
