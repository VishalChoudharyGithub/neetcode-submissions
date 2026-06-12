class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0;
        let localMax = 0;
        let left = 0;
        let window = new Map();

// abcdbdezxcfa
        for (let i = 0;i< s.length;i++){
            if(window.has(s[i]) && window.get(s[i])>= left){
                left =  window.get(s[i])+ 1;
            }
            max = Math.max(max,i - left + 1);
            window.set(s[i],i);
        }

        return max;
    }
}
