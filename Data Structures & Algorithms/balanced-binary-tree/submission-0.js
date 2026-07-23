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
    isBalanced(root) {
        if(!root) return true;
        function getHeight(node){
           if(!node) return [true,0];
           const leftSubTree = getHeight(node.left);
           const rightSubTree = getHeight(node.right);
           const height =  1 + Math.max(leftSubTree[1], rightSubTree[1]);
           const isBalanced = leftSubTree[0] && rightSubTree[0] && Math.abs(leftSubTree[1] - rightSubTree[1]) <= 1;
           return [isBalanced,height];
        }

        return getHeight(root)[0]
    }
}
