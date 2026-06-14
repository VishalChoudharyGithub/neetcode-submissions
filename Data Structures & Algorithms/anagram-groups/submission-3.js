class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const cache = new Map();
        for(let str of strs){
            const countArr = new Array(26).fill(0);
            for(let c of str){
                // you can use 97 directly for a
                const index = c.charCodeAt(0) - "a".charCodeAt(0);
                countArr[index] += 1;
            }
            const counter = countArr.join(",");
            if(!cache.has(counter)){
                cache.set(counter,[]);
            }
            cache.get(counter).push(str);
        }
        return Array.from(cache.values());
    }
}