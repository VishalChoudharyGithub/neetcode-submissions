class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // build adjacency list: edge [a, b] means "b before a", so b → a.
        // graph[b] lists everything that becomes available AFTER finishing b.
        function buildGraph(numNodes, edges) {
            const graph = Array.from({ length: numNodes }, () => []);
            for (const [a, b] of edges) {
                graph[b].push(a); // b unlocks a
            }
            return graph;
        }

        const graph = buildGraph(numCourses, prerequisites);

        // 0 = unvisited, 1 = visiting (on the current DFS path), 2 = visited (fully cleared)
        const state = new Array(numCourses).fill(0);

        // returns TRUE if this course (and everything it depends on) can be finished — i.e. NO cycle through here.
        function canFinishCourses(node) {
            if (state[node] === 1) return false; // GRAY: I'm already on this node's path → looped back → cycle → can't finish
            if (state[node] === 2) return true; // BLACK: I fully cleared this before → safe, no need to re-explore

            state[node] = 1; // paint GRAY: entering, now on my current path (do this BEFORE recursing)

            for (let course of graph[node]) {
                // explore everything that depends on this node
                if (!canFinishCourses(course)) return false; // a cycle found deeper → bail out immediately
            }

            state[node] = 2; // paint BLACK: all descendants clean, LEAVING the path → permanently safe
            return true; // no cycle reachable from here
        }

        // graph may be disconnected, so I can't just start at node 0 — I must try every course as a start.
        for (let node = 0; node < numCourses; node++) {
            if (!canFinishCourses(node)) return false; // any cycle anywhere → whole thing is impossible
        }

        return true; // no cycle found in any component → all courses finishable
    }
}
