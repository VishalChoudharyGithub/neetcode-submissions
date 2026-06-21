class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        return this.isPalindrome(s,0,s.length-1,false);
    }

    isPalindrome(s,i,j,isRemoved){
        while(i<j){
            if(s[i] !== s[j]){
                if(isRemoved) return false;
                return this.isPalindrome(s,i+1,j,true) ||  this.isPalindrome(s,i,j-1,true)
            }
            i++;j--;
        }

        return true;
    }
}
