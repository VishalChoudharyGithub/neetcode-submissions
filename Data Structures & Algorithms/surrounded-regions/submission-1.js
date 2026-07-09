class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        // guard the empty case first — if there's no board, there's nothing to capture,
        // and board[0] below would blow up on an empty array.
        if (board.length === 0) return;

        const rows = board.length;
        const cols = board[0].length;

        // My whole strategy hinges on one fact: an 'O' survives iff it can reach the border.
        // So instead of asking each interior 'O' "are you trapped?", I flip it — I start FROM the
        // border and flood inward through connected 'O's, tagging everything I reach as SAFE.
        // Whatever 'O's I never reach were unreachable from the edge → those are the trapped ones.

        // I'll tag safe cells with a temporary marker 'S'. Why a temp marker instead of a separate
        // visited grid? Because I need three states by the end — trapped-O, safe-O, and wall-X —
        // and I can't tell "safe" from "trapped" if both stay 'O'. (Same three-state lesson as the
        // island perimeter problem: my visited-mark must not collide with an existing value.)

        // DFS that, starting from a border 'O', crawls through all connected 'O's and marks them safe.
        const flood = (r, c) => {
            // stop if: off the grid, OR this cell isn't an 'O' (it's a wall 'X', or already-marked 'S').
            // that single check covers bounds, walls, and don't-revisit all at once.
            if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== 'O') return;

            board[r][c] = 'S';   // this 'O' connects back to the border → mark it SAFE before recursing
                                 // (mark-before-recurse: stops cycles/infinite loops, same as always)

            flood(r - 1, c);     // up
            flood(r + 1, c);     // down
            flood(r, c - 1);     // left
            flood(r, c + 1);     // right
        };

        // STEP 1 — kick off the flood from every 'O' sitting on the border.
        // I don't need to scan the whole grid for seeds — only the four edges can be "exits".

        // left and right columns
        for (let r = 0; r < rows; r++) {
            if (board[r][0] === 'O')        flood(r, 0);          // left edge
            if (board[r][cols - 1] === 'O') flood(r, cols - 1);   // right edge
        }
        // top and bottom rows
        for (let c = 0; c < cols; c++) {
            if (board[0][c] === 'O')        flood(0, c);          // top edge
            if (board[rows - 1][c] === 'O') flood(rows - 1, c);   // bottom edge
        }

        // STEP 2 — after the flood, every cell is one of three things. Now I sweep once and resolve them:
        //   'O' → never reached from the border → TRAPPED → capture it → 'X'
        //   'S' → I marked it safe → restore it back to 'O'
        //   'X' → a wall, leave it alone
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] === 'O')      board[r][c] = 'X';   // trapped → captured
                else if (board[r][c] === 'S') board[r][c] = 'O';   // safe → back to normal
            }
        }
        // modified in place, no return
    }
}