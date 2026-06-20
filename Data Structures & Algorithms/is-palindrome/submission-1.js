class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0, j = s.length-1;
        while(i < j){
            if(!this.isAlphanumeric(s[i])) {
                i++;
                continue;
            }
            if(!this.isAlphanumeric(s[j])){
                j--;
                continue;
            }
            if(s[i].toLowerCase() !== s[j].toLowerCase()) return false;
            i++;
            j--;
        }
        return true;
        
    }

    isAlphanumeric = (char) => /[a-z0-9]/i.test(char);

}
