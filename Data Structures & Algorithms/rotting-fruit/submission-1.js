class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ]; // up, down, left, right
        const queue = []; // ONE queue holding the current rot frontier — no more full-grid re-scans
        let fresh = 0; // count of fresh fruit still alive — my -1 detector at the end

        // STEP 1 — single pass to set up: seed ALL initially-rotten fruit, and count the fresh ones.
        // this is the ONLY time I scan the whole grid. after this, the queue carries the wave itself.
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 2)
                    queue.push([r, c]); // a starting rot source → seed it (multi-source)
                else if (grid[r][c] === 1) fresh++; // tally fresh fruit so I know when all have rotted
            }
        }

        let minutes = 0; // how many rings/rounds the rot has expanded

        // STEP 2 — expand the rot ring by ring. each full ring = one minute.
        // guard `fresh > 0`: if no fresh fruit remain, there's nothing left to rot, so I can stop
        // (this also makes the no-fresh-at-start case return 0 for free — loop never runs).
        while (queue.length > 0 && fresh > 0) {
            // process the ENTIRE current frontier as one minute's worth of spreading.
            // I freeze the count NOW so newly-rotted fruit added this round aren't processed until next minute —
            // this is how I count discrete minutes correctly (and it replaces the temp-3 trick from Approach 1).
            const ringSize = queue.length;

            for (let i = 0; i < ringSize; i++) {
                const [r, c] = queue.shift(); // a rotten fruit from THIS minute's frontier

                for (const [dr, dc] of directions) {
                    const nr = r + dr,
                        nc = c + dc;
                    // rot a neighbor ONLY if it's in bounds and FRESH (1).
                    // empties(0) and already-rotten(2) fail this check, so they're skipped for free.
                    if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || grid[nr][nc] !== 1)
                        continue;

                    grid[nr][nc] = 2; // rot it — and since it's no longer 1, it won't be re-rotted
                    // (setting it away from 1 doubles as the visited-mark)
                    fresh--; // one fewer fresh fruit alive
                    queue.push([nr, nc]); // enqueue so IT spreads next minute (mark-on-enqueue)
                }
            }

            minutes++; // a whole ring finished spreading → one minute elapsed
        }

        // if any fresh fruit survived, it was unreachable → impossible to rot everything.
        // otherwise, `minutes` is when the last fruit rotted.
        return fresh === 0 ? minutes : -1;
    }
}
