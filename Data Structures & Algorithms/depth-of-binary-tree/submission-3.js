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
    maxDepth(root) {
        if(!root) return 0;
        const stack = [root];
        let level = 0;
        while(stack.length){
            let size = stack.length;
            for(let i = 0; i < size; i++){
                let node = stack.shift();
                if(node.left) stack.push(node.left);
                if(node.right) stack.push(node.right);
            }
            level += 1;
        }

        return level;
    }
}
