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
     * @return {boolean}
     */
    isValidBST(root) {
        function isValid(node, lowerBound, upperBound) {
            if(!node) return true;

            if(!(node.val > lowerBound && node.val < upperBound)) return false;
            return isValid(node.left,lowerBound, node.val) && isValid(node.right,node.val, upperBound);
        }
        return isValid(root, -Infinity, Infinity);
    }
}
