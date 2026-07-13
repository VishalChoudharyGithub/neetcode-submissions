class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const graph = Array.from({length:n},()=>[]);

        for(let [a,b] of edges){
            graph[a].push(b);
            graph[b].push(a);
        }
        if(edges.length !== n-1) return false;
        const visited = new Set();

        function dfs(node){
            if(visited.has(node)) return;
            visited.add(node);

            for(let neighour of graph[node]){
                dfs(neighour);
            }
        }

        dfs(0);
        return visited.size === n;
    }
}
