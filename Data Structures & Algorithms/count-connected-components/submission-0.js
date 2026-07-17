class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        // --- Union-Find, tailored to counting components ---
        // key idea: every node starts alone, so I begin with n separate groups.
        // every time an edge genuinely merges two DIFFERENT groups, the group count drops by one.
        // whatever's left at the end is the number of connected components.

        const parent = Array.from({ length: n }, (_, i) => i);  // each node is its own leader to start
        const size = new Array(n).fill(1);                      // each group has 1 node initially
        let count = n;                                          // n lonely groups right now

        // FIND with path compression: climb to the group's root, flattening as I go so it's fast next time
        const find = (x) => {
            while (parent[x] !== x) {
                parent[x] = parent[parent[x]];  // point x at its grandparent — halves the climb over time
                x = parent[x];
            }
            return x;   // the leader of x's group
        };

        // UNION: try to merge the groups of a and b
        const union = (a, b) => {
            let rootA = find(a);
            let rootB = find(b);

            // already the same leader? then a and b were ALREADY connected — this edge is redundant.
            // don't merge, don't decrement. (in a tree-check problem this would signal a cycle.)
            if (rootA === rootB) return;

            // union by size: hang the smaller tree under the bigger root, keeps trees short
            if (size[rootA] < size[rootB]) {
                [rootA, rootB] = [rootB, rootA];
            }
            parent[rootB] = rootA;        // smaller group now points to the bigger group's leader
            size[rootA] += size[rootB];   // bigger group absorbed the smaller one
            count--;                      // two groups just became one → one fewer component
        };

        // --- the actual solve: just fold every edge into the structure ---
        for (const [a, b] of edges) {
            union(a, b);   // each edge tries to connect two nodes; count self-adjusts as merges happen
        }

        // count started at n and dropped once per real merge → it's exactly the number of components now.
        // isolated nodes (in no edge) were never touched, so they correctly remain their own components.
        return count;
    }
}