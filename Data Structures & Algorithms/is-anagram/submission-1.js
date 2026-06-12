class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // isAnagram(s, t) {
    //     if(s.length !== t.length) return false;
    //     const freq = {};
    //     for(let c of s){
    //         freq[c] = (freq[c] || 0) + 1;
    //     }
    //     for(let c of t){
    //         if(!freq[c]) return false;
    //         freq[c] -= 1;
    //         if(freq[c] < 0) return false;
    //     }
    //     return true;
    // }

    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        return s.split('').sort().join('') === t.split('').sort().join('');
    }
}
