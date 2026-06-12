class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s2.length < s1.length) return false;
        const s1Notebook = new Array(26).fill(0); 
        const s2Notebook = new Array(26).fill(0);
        let totalMatches = 0;

        for(let i = 0; i < s1.length; i++){
            s1Notebook[s1.charCodeAt(i) - 97]++;
            s2Notebook[s2.charCodeAt(i) - 97]++;
        }
        for (let i = 0; i < 26; i++) {
            if (s1Notebook[i] === s2Notebook[i]) {
                totalMatches++;
            }
        }
        for(let l = 0, r = s1.length; r<s2.length;r++,l++){
            if(totalMatches === 26) return true;
            let rIndex = s2.charCodeAt(r) - 97;
            let lIndex = s2.charCodeAt(l) - 97;
            s2Notebook[lIndex]--;
            if (s1Notebook[lIndex] === s2Notebook[lIndex]) {
                totalMatches++;
            } else if (s1Notebook[lIndex]  === s2Notebook[lIndex] + 1) {
                totalMatches--;
            }
            
            s2Notebook[rIndex]++;

            if (s1Notebook[rIndex] === s2Notebook[rIndex]) {
                totalMatches++;
            } else if (s1Notebook[rIndex]  === s2Notebook[rIndex] - 1) {
                totalMatches--;
            }

        }
        return totalMatches === 26;

    }
}
