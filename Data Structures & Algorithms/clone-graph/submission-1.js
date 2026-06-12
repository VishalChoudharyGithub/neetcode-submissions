/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;
        const cache = new Map();

        function dfs(node){
            if(cache.has(node.val)){
                return cache.get(node.val);
            }
            const copy = new Node(node.val);
            cache.set(node.val, copy);
            for(let neighour of node.neighbors){
                copy.neighbors.push(dfs(neighour));
            }
            return copy;
        }

        return dfs(node);
    }
}
