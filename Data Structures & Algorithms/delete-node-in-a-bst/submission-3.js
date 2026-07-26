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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        function getAndDeleteNode(node){
            if(!node) return null;
            if(node.val === key){
                if(!node.left && !node.right) return null;
                if(!node.left) return node.right;
                if(!node.right) return node.left;
                let tempNode = node.left;
                while(tempNode.right){
                    tempNode = tempNode.right;
                }
                tempNode.right = node.right;
                return node.left;
            }

            if(node.val > key) node.left = getAndDeleteNode(node.left);
            else node.right = getAndDeleteNode(node.right);
            return node;
        }

        return getAndDeleteNode(root);
    }
}
