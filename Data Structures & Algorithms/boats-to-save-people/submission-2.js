class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((p1, p2) => p1 - p2);
        let boats = 0;
        let l = 0,
            r = people.length - 1;
        while (l <= r) {
            if (l === r) {
                boats++;
                l++;
            } else {
                if (people[l] + people[r] <= limit) {
                    l++;
                    r--;
                } else {
                    r--;
                }
                boats++;
            }
        }

        return boats;
    }
}
