class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        const arr = new Array(Math.max(word1.length,word2.length));
        let i=0;
        for(; i< word1.length && i < word2.length;i++){
            arr[i] = word1[i] + word2[i];
        }

        while(i< word1.length){
            arr[i] = word1[i++];
        }
        while(i< word2.length){
            arr[i] = word2[i++];
        }

        return arr.join("");
    }
}
