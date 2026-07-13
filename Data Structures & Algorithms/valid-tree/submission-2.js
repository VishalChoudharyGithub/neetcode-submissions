class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // THE shortcut: a tree on n nodes has exactly n-1 edges. check this FIRST, before any setup —
        // it's O(1) and lets me bail instantly. too few edges → can't be connected; too many → must have a cycle.
        // once this passes, "connected" and "acyclic" imply each other, so I only need to verify ONE of them.
        if (edges.length !== n - 1) return false;

        // build the undirected adjacency list: each edge wires BOTH directions.
        const graph = Array.from({ length: n }, () => []);
        for (const [a, b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }

        // now I just check connectivity: can I reach every node starting from node 0?
        // (I don't need a separate cycle check — the n-1 edge count already guarantees acyclic IF connected.)
        const visited = new Set();
        const dfs = (node) => {
            if (visited.has(node)) return;   // seen it → stop (also prevents looping on the undirected back-edges)
            visited.add(node);               // mark before recursing
            for (const neighbor of graph[node]) {
                dfs(neighbor);
            }
        };
        dfs(0);

        // if the flood from node 0 reached ALL n nodes, the graph is one connected piece → valid tree.
        // if it reached fewer, some nodes are on a separate island → not a tree.
        return visited.size === n;
    }
}