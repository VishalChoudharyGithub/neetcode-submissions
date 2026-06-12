class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let max  = 0 ;
        let freq = {};
        let currentMax = 0;
        let l = 0;

        for(let r = 0 ;r < s.length;r++){
            const char = s[r];
            freq[char] = (freq[char] || 0) + 1;
            currentMax = Math.max(currentMax, freq[char]);

            while( r - l + 1 - currentMax > k){
                freq[s[l]] -= 1;
                l++;
            }
            max = Math.max(max, r - l + 1);
        }

        return max;
    }
}
