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
     * @return {number[]}
     */
    preorderTraversal(root) {
        function getResult(node,res = []){
            if(!node) return res;
            res.push(node.val);
            getResult(node.left,res);
            getResult(node.right,res);
            return res;
        }
        return getResult(root);
    }
}
