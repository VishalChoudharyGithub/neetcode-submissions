class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        const visited = new Set(deadends);

        if (visited.has("0000")) return -1;   // start itself is jammed → impossible
        visited.add("0000");

        const queue = ["0000"];
        let res = 0;

        // neighbor helpers: turn wheel i one notch, with 0↔9 wraparound
        const turn = (str, i, delta) => {
            const d = (Number(str[i]) + delta + 10) % 10;   // +10 before %10 handles the -1 wrap cleanly
            return str.slice(0, i) + d + str.slice(i + 1);
        };

        while (queue.length) {
            const ringSize = queue.length;   // freeze this ring — everything here is `res` moves away
            for (let i = 0; i < ringSize; i++) {
                const state = queue.shift();

                if (state === target) return res;   // first time we reach target = fewest moves. done.

                for (let j = 0; j < 4; j++) {        // each of the 4 wheels...
                    for (const delta of [1, -1]) {   // ...turned up (+1) and down (-1)
                        const next = turn(state, j, delta);
                        if (!visited.has(next)) {    // not forbidden AND not seen → it's a fresh state
                            visited.add(next);       // mark on enqueue (no duplicates)
                            queue.push(next);
                        }
                    }
                }
            }
            res += 1;   // finished a whole ring → one more move
        }

        return -1;   // queue drained without reaching target → deadends fenced it off
    }
}
