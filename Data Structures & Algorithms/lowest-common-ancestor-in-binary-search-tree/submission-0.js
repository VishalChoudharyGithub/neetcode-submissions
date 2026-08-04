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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        function findAncestor(node) {
            if (p.val === node.val || q.val === node.val) return node;
            if ((p.val < node.val && node.val < q.val) || (q.val < node.val && node.val < p.val))
                return node;
            if(node.val > p.val) return findAncestor(node.left);
            if(node.val < p.val) return findAncestor(node.right);

        }

        return findAncestor(root);
    }
}
