/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        function invertNode(node){
            if(!node) return node;
            let nodeLeft = node.left;
            node.left = node.right;
            node.right = nodeLeft;
            invertNode(node.left);
            invertNode(node.right);
            return node;
        }

        return invertNode(root);
    }
}
