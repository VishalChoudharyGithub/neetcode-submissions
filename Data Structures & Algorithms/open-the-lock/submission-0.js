class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        const deadendsCache = new Set(deadends);

        if (deadendsCache.has("0000")) return -1;

        const queue = ["0000"];
        const visited = new Set();
        visited.add("0000");
        let res = 0;

        function incrementChar(str, i) {
            const num = Number(str[i]);
            return str.slice(0, i) + (num === 9 ? 0 : num + 1) + str.slice(i + 1);
        }
        function decrementChar(str, i) {
            const num = Number(str[i]);
            return str.slice(0, i) + (num === 0 ? 9 : num - 1) + str.slice(i + 1);
        }
        while (queue.length) {
            const ringSize = queue.length;
            for (let i = 0; i < ringSize; i++) {
                const wheel = queue.shift();
                if (wheel === target) return res;
                if (deadendsCache.has(wheel)) continue;
                for (let j = 0; j < 4; j++) {
                    const incremented = incrementChar(wheel, j);
                    const decremented = decrementChar(wheel, j);
                    if (!visited.has(incremented)) {
                        queue.push(incremented);
                        visited.add(incremented);
                    }
                    if (!visited.has(decremented)) {
                        queue.push(decremented);
                        visited.add(decremented);
                    }
                }
            }

            res += 1;
        }

        return -1;
    }
}
