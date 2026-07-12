class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        // adjacency list: edge [a, b] means "b before a", so b → a.
        // graph[b] holds every course that opens up once b is finished.
        const graph = Array.from({ length: numCourses }, () => []);

        // in-degree[c] = how many prerequisites course c is still waiting on.
        // this is the number I'll "burn down" to zero before c becomes takeable.
        const inDegree = new Array(numCourses).fill(0);

        for (const [a, b] of prerequisites) {
            graph[b].push(a);   // b unlocks a
            inDegree[a]++;      // ...and that's one more prerequisite standing between me and a
        }

        // seed the queue with every course that needs NOTHING up front — I can take these right now.
        // if there's no such course at all, the graph is cyclic from the start and this stays empty.
        const queue = [];
        for (let c = 0; c < numCourses; c++) {
            if (inDegree[c] === 0) queue.push(c);
        }

        const order = [];   // the topological order builds up here, in the sequence I take courses

        while (queue.length) {
            const course = queue.shift();   // all its prereqs are satisfied → take it now
            order.push(course);             // record it in the schedule

            // taking `course` clears one prerequisite off each course that depended on it
            for (const next of graph[course]) {
                inDegree[next]--;                     // one fewer thing `next` is waiting on
                if (inDegree[next] === 0) queue.push(next);  // nothing left blocking `next` → it's takeable now
            }
        }

        // the length check IS the cycle test: if every course got placed, it's a full valid order.
        // if some courses never hit in-degree 0, they're tangled in a cycle and never got queued →
        // order is short → no valid schedule exists → return [].
        return order.length === numCourses ? order : [];
    }
}
