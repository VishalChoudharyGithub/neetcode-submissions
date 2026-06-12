class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {

        const res = [];
        const nums= [];

        function calculate(totalNums,index){
            if(totalNums === k) {
                res.push([...nums]);
                return;
            }

            for(let i = index; i<= n ;i++){
                nums.push(i);
                calculate(totalNums+1, i+1);
                nums.pop();
            }
        }

        calculate(0, 1);

        return res;
    }
}
