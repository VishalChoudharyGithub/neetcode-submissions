class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for(const word of strs){
            res += word.length + "#" + word;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const res = [];
        while(i <str.length){
            let j = i;
            while(str[j] !== '#'){
                j++;
            }
            let length = parseInt(str.substring(i,j));
            const wordStartIndex = j+1;
            res.push(str.substring(wordStartIndex,wordStartIndex+length));
            i = wordStartIndex+length;
        }
        return res;
    }
}
