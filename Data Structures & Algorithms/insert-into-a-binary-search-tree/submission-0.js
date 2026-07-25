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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        const nodeToAttach = new TreeNode(val);
        if(!root) return nodeToAttach;

        function attachNode(node){
            if(!node) return nodeToAttach;

            if(node.val < nodeToAttach.val){
                node.right =  attachNode(node.right);
            }else{
                node.left =  attachNode(node.left);
            }
            return node;
        }
        return attachNode(root);
    }
}
