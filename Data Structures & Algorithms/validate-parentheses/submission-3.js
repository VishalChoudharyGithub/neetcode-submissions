class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closingBracket = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        const stack = [];
        for (let bracket of s) {
            if (closingBracket[bracket]) {
                if (!stack.length || closingBracket[bracket] !== stack.pop()) return false;
            } else {
                stack.push(bracket);
            }
        }
        return !stack.length;
    }
}
