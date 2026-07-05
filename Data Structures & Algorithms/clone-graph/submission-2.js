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
        // empty graph? nothing to clone — hand back null before I touch any property
        if (node === null) return null;

        const visited = {};   // maps ORIGINAL node's val → its CLONE. my "have I already copied this?" ledger

        function dfs(nodeToCopy) {
            // have I already made a clone of this exact node? if so, return that SAME clone —
            // don't make a second one. this is what stops cycles from looping forever.
            if (visited[nodeToCopy.val]) return visited[nodeToCopy.val];

            // first time seeing this node → make its clone, but with an EMPTY neighbor list for now.
            // (do NOT pass nodeToCopy.neighbors — those point into the ORIGINAL graph; I want clones only)
            const clone = new Node(nodeToCopy.val);

            // register the clone in visited RIGHT NOW, before recursing.
            // critical: if a neighbor loops back to this node, it must find this clone already here.
            visited[nodeToCopy.val] = clone;

            // now wire up the clone's neighbors — each neighbor gets cloned (or fetched if already done)
            for (let neighbor of nodeToCopy.neighbors) {
                clone.neighbors.push(dfs(neighbor));   // recurse → returns the neighbor's clone → attach it
            }

            return clone;   // fully wired clone of this node
        }

        return dfs(node);   // kick it off from the entry node
    }
}
