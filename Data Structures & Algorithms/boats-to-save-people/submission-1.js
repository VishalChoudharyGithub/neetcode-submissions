class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a,b)=> b-a);
        let l = 0, r= people.length-1;
        let boats = 0;

        while(l <= r){
            if(people[l]+ people[r] <= limit){
                l++; r--;
            }else{
                l++;
            }
            boats++;
        }
        return boats;
    }

    // 3,3,2,2,1
    // 1 1 3 4
}
