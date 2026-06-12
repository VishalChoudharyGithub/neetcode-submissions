class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const counter = new Map();
        for(let c of s){
            counter.set(c, (counter.get(c) || 0)+1);
        }
        for(let c of t){
            if(!counter.has(c)) return false;
            counter.set(c, counter.get(c)-1);
            if(counter.get(c) < 0) return false;
        }

        return true;
    }
}
