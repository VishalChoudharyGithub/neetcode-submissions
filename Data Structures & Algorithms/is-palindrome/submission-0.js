class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const clean = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
        for(let i=0,j = clean.length -1;i<j;i++,j--){
            if(clean[i] !== clean[j]) return false;
        }
        return true;
    }
}
