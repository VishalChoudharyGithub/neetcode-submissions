class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length;
        const cols = heights[0].length;
        let pecific = Array.from({ length: rows }, () => new Array(cols).fill(false));
        let atlantic = Array.from({ length: rows }, () => new Array(cols).fill(false));
        let pecificQueue = [];
        let atlanticQueue = [];
        const directions = [
            [-1, 0],
            [1, 0],
            [0, 1],
            [0, -1],
        ];
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (i === 0 || j === 0) {
                    pecific[i][j] = true;
                    pecificQueue.push([i, j]);
                }
                if (i === rows - 1 || j === cols - 1) {
                    atlantic[i][j] = true;
                    atlanticQueue.push([i, j]);
                }
            }
        }

        while (pecificQueue.length) {
            const [r, c] = pecificQueue.shift();
            for (const [dr, dc] of directions) {
                const nr = r + dr,
                    nc = c + dc;
                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || pecific[nr][nc] === true|| heights[r][c] > heights[nr][nc])
                    continue;
                pecificQueue.push([nr, nc]);
                pecific[nr][nc] = true;
            }
        }
        while (atlanticQueue.length) {
            const [r, c] = atlanticQueue.shift();
            for (const [dr, dc] of directions) {
                const nr = r + dr,
                    nc = c + dc;
                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || atlantic[nr][nc] === true || heights[r][c] > heights[nr][nc])
                    continue;
                atlanticQueue.push([nr, nc]);
                atlantic[nr][nc] = true;
            }
        }
        let res = [];
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (pecific[i][j] === true && atlantic[i][j] === true) res.push([i, j]);
            }
        }

        return res;
    }
}
