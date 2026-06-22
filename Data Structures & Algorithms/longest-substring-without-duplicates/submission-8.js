class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length === 0) return 0;
        let res = 1;
        let cache = new Set([s[0]]);
        let st = 0,e = 1;
        while(e< s.length){
            let newChar = s[e];
            while(cache.has(newChar)){
                cache.delete(s[st]);
                st++;
            } 
            cache.add(newChar);
            if(cache.size >res) res = cache.size;
            e++;
        } 
        return res;
    }   
}
