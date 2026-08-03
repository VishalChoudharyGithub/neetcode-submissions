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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let counter = 0;
        let result;

        function inOrder(node) {
            if (!node) return;
            inOrder(node.left);
            if (++counter === k) {
                result = node.val;
                return;
            }
            if (result === undefined) inOrder(node.right);
        }
        inOrder(root);
        return result;
    }
}
