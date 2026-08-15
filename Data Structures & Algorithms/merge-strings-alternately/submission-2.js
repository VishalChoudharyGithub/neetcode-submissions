class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let ans = new Array(word1.length + word2.length);
        let i = 0;
        while( i< word1.length && i< word2.length){
            ans.push(word1[i], word2[i]);
            i++;
        }
        while( i< word1.length){
            ans.push(word1[i]);
            i++;
        }
        while( i< word2.length){
            ans.push(word2[i]);
            i++;
        }

        return ans.join("");
    }
}
