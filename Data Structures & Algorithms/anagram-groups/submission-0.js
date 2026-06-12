class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       const helperMap = new Map();
        for(let word of strs){
            const sortedWord = word.split("").sort().join("");

            console.log(sortedWord);
            if(helperMap.has(sortedWord)){
                helperMap.get(sortedWord).push(word);
            }else{
                helperMap.set(sortedWord,[word]);
            }
        }
        return[ ...helperMap.values()];
    }   
}
