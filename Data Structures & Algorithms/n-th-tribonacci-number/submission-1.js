class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        const values = [0,1,1];
        if(n<=2) return values[n];
        let ans = 0;
        for(let i = 3; i<= n;i++){
            ans = values.reduce((acc,num)=>acc+ num,0);
            values.copyWithin(0, 1);
            values[2] = ans;
        }

        return ans;
    }
}
