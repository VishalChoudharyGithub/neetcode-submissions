/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        function getNumber(l, r) {
            const mid = l + Math.floor((r - l) / 2);
            const res = guess(mid);
            if (res === 0) return mid;
            if (res === 1) return getNumber(mid + 1, r);
            return getNumber(l, mid - 1);
        }
        return getNumber(1, n);
    }
}
