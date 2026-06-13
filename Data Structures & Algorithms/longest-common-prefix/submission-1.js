class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let minLength = strs[0].length;
        for(let str of strs){
            minLength = Math.min(minLength,str.length);
        }
        let res = "";
        for(let i = 0; i< minLength;i++){
            const toCheck = strs[0][i];
            for(let j = 1; j<strs.length;j++){
                if(strs[j][i] !== toCheck){
                    return res;
                }
            }
                res += toCheck;
        }
        return res;
    } 
}
