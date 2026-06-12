class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const cache = {};
        for(let str of strs){
            const arr = new Array(26).fill(0);
            for(let c of str){
                let index = c.charCodeAt(0) - 'a'.charCodeAt(0);
                arr[index] += 1;
            }
            const encodedString = arr.join(',');
            if(!cache[encodedString]) cache[encodedString] = [];
            cache[encodedString].push(str);
        }
        return Object.values(cache);
    }
}
