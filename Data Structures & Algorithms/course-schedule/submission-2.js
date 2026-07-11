class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        function buildGraph(numNodes, edges) {
            const graph = Array.from({ length: numNodes }, () => []);
            for (const [a, b] of edges) {
                graph[b].push(a); 
            }
            return graph;
        }
        const graph = buildGraph(numCourses,prerequisites);
        const state = new Array(numCourses).fill(0);

        function canFinishCourses(node){
            if(state[node] === 1) return false;
            if(state[node] === 2) return true;

            state[node] = 1;
            for( let course of graph[node]){
                if(!canFinishCourses(course)) return false;
            }

            state[node] = 2;
            return true;
        }

        for(let node = 0 ; node<numCourses;node++){
            if(!canFinishCourses(node)) return false;
        }

        return true;
    }
}
