class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const notebook = new Set(nums);
        let res  = 0;
        for(let num of nums){
            if(notebook.has(num-1)) continue;
            let length = 1;
            while(notebook.has(num+1)){
                length++;
                num += 1;
            } 
            res = Math.max(res,length);
        }

        return res;

    }
}
