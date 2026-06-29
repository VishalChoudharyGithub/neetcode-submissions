class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let freq = {};
        let currentMaxFreq = 0;
        let l =0;
        for(let r = 0;r<s.length;r++){
            const char = s[r];
            freq[char] = (freq[char] || 0) + 1;
            currentMaxFreq = Math.max(currentMaxFreq, freq[char]);

            while(r-l+1 - currentMaxFreq > k){
                freq[s[l]] -=1;
                l++;
            }

            res = Math.max(res, r-l+1);

        }
        return res;
    }
}
