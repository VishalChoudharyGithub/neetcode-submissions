class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length  !== t.length) return false;
       const cache = new Map();
       for(let c of s){
        const count = cache.get(c) || 0;
        cache.set(c, count+1);
       } 
       for(let c of t){
        const count = cache.get(c) || 0;
        if(count === 0) return false;
        cache.set(c, count-1);
       }

       return true;
    }

}
