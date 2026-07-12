class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const graph = Array.from({length:numCourses},()=>[]);
        function buildGraph(){
            for(let prerequisite of prerequisites){
                const [a,b] = prerequisite;
                graph[b].push(a);
            }
        }
        buildGraph();
        const inDegree = new Array(numCourses).fill(0);

        for(let i =0 ; i< numCourses;i++){
            for(let next of graph[i]){
                inDegree[next]++;
            }
        }

        const queue = [];
        const order = [];

        for(let i = 0 ; i< numCourses;i++){
            if(inDegree[i] === 0) queue.push(i);
        }

        while(queue.length){
            const node = queue.shift();
            order.push(node);
            for(let next of graph[node]){
                inDegree[next]--;
                if(inDegree[next] === 0) queue.push(next);
            }
        }

        return order.length === numCourses? order :[];
    }
}
