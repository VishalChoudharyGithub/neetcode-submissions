class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        function isPalindrome(i,j){
            while(i<j){
                if(s[i++] !== s[j--]) return false;
            }
            return true;
        }
        for(let i = 0, j = s.length-1;i<j;i++,j--){
            if(s[i] === s[j]) continue;
            else{
                return isPalindrome(i+1,j) || isPalindrome(i,j-1);       
            }
        }
        return true;
    }
}
