class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        function isOpenBracket(bracket){
            return ['(','[','{'].includes(bracket);
        }
        function isValidPair(brackets){
            return ['()','[]','{}'].includes(brackets);
        }

        const stack = [];

        for(let bracket of s){
            if(isOpenBracket(bracket)){
                stack.push(bracket);
            }else{
                if(!stack.length) return false;
                const lastItem = stack.pop();
                if(!isValidPair(`${lastItem}${bracket}`)) return false;
            }
        }
        return !stack.length;
    }
}
