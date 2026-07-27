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
     * @return {number}
     */
    goodNodes(root) {
        let res = 0;


        function findGoodNodes(node,maxTillNow){
            if(!node) return;
            if(node.val >= maxTillNow){
                res++;
                maxTillNow = node.val;
            }
            findGoodNodes(node.left,maxTillNow);
            findGoodNodes(node.right,maxTillNow);

        }

        findGoodNodes(root,root.val);

        return res;
    }
}
