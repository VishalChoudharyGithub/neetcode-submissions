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
    rightSideView(root) {
        if(!root) return [];
        const res = [];
        const queue = [root];
        while(queue.length){
            const queueSize = queue.length;
            res.push(queue[queueSize-1].val);
            for(let i = 0 ; i< queueSize;i++){
                const node = queue.shift();
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
        }

        return res;
    }
}
