class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length;
        const cols = heights[0].length;

        // I need to know, for each cell, two independent facts: "can it reach the Pacific?" and
        // "can it reach the Atlantic?" — so I'll keep TWO separate boolean grids. one ocean's answer
        // has nothing to do with the other's, so they can't share memory.
        const pacific = Array.from({ length: rows }, () => new Array(cols).fill(false));
        const atlantic = Array.from({ length: rows }, () => new Array(cols).fill(false));

        // instead of simulating water flowing DOWNHILL from every cell to an ocean (which means one
        // search per cell — wasteful), I flip it: start AT each ocean and crawl UPHILL inward, claiming
        // every cell that could have drained into that ocean. two multi-source floods, not V searches.
        const pacificQueue = [];
        const atlanticQueue = [];
        const directions = [
            [-1, 0],
            [1, 0],
            [0, 1],
            [0, -1],
        ]; // up, down, right, left

        // seed both oceans' edges at once (multi-source). every edge cell trivially reaches its own ocean.
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (i === 0 || j === 0) {
                    // top row or left column touches the Pacific
                    pacific[i][j] = true; // mark it reachable...
                    pacificQueue.push([i, j]); // ...and seed it as a flood origin
                }
                if (i === rows - 1 || j === cols - 1) {
                    // bottom row or right column touches the Atlantic
                    atlantic[i][j] = true;
                    atlanticQueue.push([i, j]);
                }
            }
        }

        // one flood routine, reused for both oceans — same logic twice invites a fix-one-forget-the-other
        // bug, so I write it once. `ocean` is whichever visited-grid I'm filling.
        const flood = (queue, ocean) => {
            while (queue.length) {
                const [r, c] = queue.shift(); // FIFO — I don't need distances, but a queue is fine
                for (const [dr, dc] of directions) {
                    const nr = r + dr,
                        nc = c + dc;

                    // off the grid? or already claimed by THIS ocean? → nothing to do
                    if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || ocean[nr][nc]) continue;

                    // THE REVERSE-FLOW RULE — the crux of the whole trick.
                    // I'm walking backwards along water's path. water reaches ME (r,c) only from a neighbor
                    // that sits equal-or-HIGHER. so if this neighbor is LOWER, water could never have flowed
                    // from it into me → it does NOT drain to this ocean via me → skip it entirely.
                    if (heights[nr][nc] < heights[r][c]) continue;

                    // survived both checks → this neighbor CAN drain to this ocean.
                    // mark AND enqueue together — "reachable" and "explore it" are the same event here.
                    // (the earlier bug was marking outside this block, wrongly claiming lower cells.)
                    ocean[nr][nc] = true;
                    queue.push([nr, nc]);
                }
            }
        };

        flood(pacificQueue, pacific); // let the Pacific climb inward and claim its cells
        flood(atlanticQueue, atlantic); // then the Atlantic does the same from the opposite edges

        // the answer is the OVERLAP: every cell both floods reached can send water to both oceans.
        const res = [];
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (pacific[i][j] && atlantic[i][j]) res.push([i, j]);
            }
        }
        return res;
    }
}
