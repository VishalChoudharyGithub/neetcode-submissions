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
    postorderTraversal(root) {
        const res = [];
        function getResult(node){
            if(!node) return;
            getResult(node.left);
            getResult(node.right);
            res.push(node.val);
        }
        getResult(root);
        return res;
    }
}
